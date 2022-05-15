import React from "react";
import AboutSection from "../Components/about/AboutSecrion";
import AboutMe from "../Components/about/AboutMeSection";
import useScrollToTop from "../Utils/useScrollToTop";

const Home = () => {
  useScrollToTop()
  return (
    <>
      <AboutSection />
      <AboutMe />
    </>
  );
};

export default Home;
