import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import LandingPage from "../ComponentsUser/LandingPage/LandingPage";
import LoginSignup from "../ComponentsUser/LoginSignup/LoginSignup";
import OrderingPage from "../ComponentsUser/OrderingPage/OrderingPage";
import Signup from "../ComponentsUser/LoginSignup/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/products" element={<OrderingPage />} />
      <Route path="/signup" element={<Signup />} /> */}
    </Routes>
  );
};

export default AllRoutes;
