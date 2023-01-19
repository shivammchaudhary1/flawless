import React from "react";
import Navbar from "./Navbar";
import Carousal from "./Carousal";
import AfterCarousal from "./AfterCarousal";
import TopBrands from "./TopBrands";
import AfterTopBrands from "./AfterTopBrands";
import OnlyatNykaa from "./OnlyatNykaa";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Carousal />
      <AfterCarousal />
      <TopBrands />
      <AfterTopBrands />
      <OnlyatNykaa />
    </div>
  );
};

export default LandingPage;
