import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Footer1 from "../../Components/Footer1";
import LoginComponent from "./LoginComponent";

const LoginSignup = () => {
  return (
    <div>
      <Navbar />
      <LoginComponent />
      <Footer1 />
      <Footer />
    </div>
  );
};

export default LoginSignup;
