import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Products from "../pages/Products/Products";
import Checkout from "../pages/Checkout";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* SingleProductPage is left  */}
      </Routes>
    </div>
  );
};

export default AllRoutes;
