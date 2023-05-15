import "./App.css";
import NavBar from "./Components/NavBar";
import AddUser from "./Components/AddUser";
import CrudApp from "./Components/CrudApp";
import AllUsers from "./Components/AllUsers";
import EditUser from "./Components/EditUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CrudApp />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
