import React from "react";
import Carousal from "./Carousal";
import AfterCarousal from "./AfterCarousal";
import TopBrands from "./TopBrands";
import AfterTopBrands from "./AfterTopBrands";
import OnlyatNykaa from "./OnlyatNykaa";
import AfterOnlyatNykaa from "./AfterOnlyatNykaa";
import Carousal1 from "./Carousal1";
import FeaturesBrand from "./FeaturesBrand";
import EverDayEssentials from "./EverDayEssentials";
import Luxe from "./Luxe";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
