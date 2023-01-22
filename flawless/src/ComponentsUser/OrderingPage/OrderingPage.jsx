import React from "react";
import Navbar from "../../Components/Navbar";
import Left from "./Left";
import Footer from "../../Components/Footer";
import Footer1 from "../../Components/Footer1";

const OrderingPage = () => {
  return (
    <div>
      <Navbar />
      <Left />
      <Footer1 />
      <Footer />
    </div>
  );
};

export default OrderingPage;
