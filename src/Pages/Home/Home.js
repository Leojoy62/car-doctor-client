import React from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Service from "./Service/Service";
import Products from "./Products/Products";
import Team from "./Team/Team";
import CoreFeature from "./CoreFeatures/CoreFeature";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Products></Products>
      <Team></Team>
      <CoreFeature></CoreFeature>
    </div>
  );
};

export default Home;
