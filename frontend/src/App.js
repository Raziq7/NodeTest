import { BrowserRouter as Routers, Route, Routes } from "react-router-dom";
import Card from "./component/Card";
import Navbar from "./component/Navbar";
import AddProduct from "./screen/AddProduct";
import Dashboard from "./screen/Dashboard";
import EditPro from "./screen/EditPro";
import Login from "./screen/Login";
import Signup from "./screen/Signup";

function App() {
  return (
    <>
      <Routers>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />

          <Route path="/Login" element={<Login />} />

          <Route path="/" element={<Card />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/addProduct" element={<AddProduct />} />

          <Route path="/editPro/:id" element={<EditPro />} />
        </Routes>
      </Routers>
    </>
  );
}

export default App;
