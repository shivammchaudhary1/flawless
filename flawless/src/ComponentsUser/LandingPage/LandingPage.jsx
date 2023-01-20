import React from "react";
import Navbar from "../../Components/Navbar";
import Carousal from "./Carousal";
import AfterCarousal from "./AfterCarousal";
import TopBrands from "./TopBrands";
import AfterTopBrands from "./AfterTopBrands";
import OnlyatNykaa from "./OnlyatNykaa";
import AfterOnlyatNykaa from "./AfterOnlyatNykaa";
import Carousal1 from "./Carousal1";
import FeaturesBrand from "./FeaturesBrand";
import Footer1 from "../../Components/Footer1";
import Footer from "../../Components/Footer";
import EverDayEssentials from "./EverDayEssentials";
import Luxe from "./Luxe";

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
      <EverDayEssentials />
      <Luxe />
      <Footer1 />
      <Footer />
    </div>
  );
};

export default LandingPage;
