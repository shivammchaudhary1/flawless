import React from "react";
import Navbar from "./Navbar";
import Carousal from "./Carousal";
import AfterCarousal from "./AfterCarousal";
import TopBrands from "./TopBrands";
import AfterTopBrands from "./AfterTopBrands";
import OnlyatNykaa from "./OnlyatNykaa";
import AfterOnlyatNykaa from "./AfterOnlyatNykaa";
import Carousal1 from "./Carousal1";
import FeaturesBrand from "./FeaturesBrand";
import Footer1 from "./Footer1";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Carousal />
      <AfterCarousal />
      <TopBrands />
      <AfterTopBrands />
      <OnlyatNykaa />
      <AfterOnlyatNykaa />
      <Carousal1 />
      <FeaturesBrand />
      <Footer1 />
      <Footer />
    </div>
  );
};

export default LandingPage;
