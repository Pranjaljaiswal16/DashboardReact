import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Product_Details from "../Pages/Product_Details";
import Product_Upload from "../Pages/Product_Upload";
import Product from "../Pages/Product";

const MainRoutes = () => {
  return (
    <>
      {/* REACT-Router */}

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path="/productdetail" element={<Product_Details />} />
        <Route path={"/productupload"} element={<Product_Upload />} />
        <Route path={"/product"} element={<Product />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
