import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Footer1 from "../../Components/Footer1";
import LoginComponent from "./LoginComponent";
import Loginexp from "./Loginexp";

const LoginSignup = () => {
  return (
    <div>
      <Navbar />
      <LoginComponent />
      {/* <Loginexp /> */}
      <Footer1 />
      <Footer />
    </div>
  );
};

export default LoginSignup;
