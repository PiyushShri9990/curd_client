import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Service/api";
import {Link} from 'react-router-dom'

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const THead = styled(TableRow)`
  background: #000000;
  & > th {
    color: #fff;
    font-size: 17px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    geAllUsers();
  }, []);

  const geAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
    // console.log(response.data);
  };

  const deleteUserDetails = async (id) =>{
    await deleteUser(id);
    geAllUsers();
  }

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key= {user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteUserDetails(user._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
