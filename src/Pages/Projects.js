import React from "react";
import ProjectHead from "../Components/project/ProjectHead";
import ProjectList from "../Components/project/ProjectList";
import useScrollToTop from "../Utils/useScrollToTop";

const Projects = () => {
  useScrollToTop()
  return (
    <>
      <ProjectHead />
      <ProjectList />
    </>
  );
};

export default Projects;
