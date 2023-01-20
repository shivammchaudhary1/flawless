import React from "react";
import Navbar from "../../Components/Navbar";
import Carousal from "../LandingPage/Carousal";
import Left from "./Left";
import Footer from "../../Components/Footer";
import Footer1 from "../../Components/Footer1";

const OrderingPage = () => {
  return (
    <div>
      <Navbar />
      <Carousal />
      <Left />
      <Footer />
      <Footer1 />
    </div>
  );
};

export default OrderingPage;
