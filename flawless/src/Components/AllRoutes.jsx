import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckoutPage from "../ComponentsUser/CheckoutPage/CheckoutPage";
import LandingPage from "../ComponentsUser/LandingPage/LandingPage";
import LoginSignup from "../ComponentsUser/LoginSignup/LoginSignup";
import OrderingPage from "../ComponentsUser/OrderingPage/OrderingPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/" element={<LoginSignup />} />
      <Route path="/" element={<OrderingPage />} />
    </Routes>
  );
};

export default AllRoutes;
