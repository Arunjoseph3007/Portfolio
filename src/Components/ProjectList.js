import React from "react";
import styled from "styled-components";
import { MainSections, SecTitle, List,StyledListItem } from "./ReusableStyles";
import { AllProjects } from "../posts/Getdata";
import { Link } from "react-router-dom";

const ProjectList = () => {
  return (
    <StyledBlogList>
      <SecTitle style={{ marginBottom: "6rem" }}>
        Take a Look<b>.</b>
      </SecTitle>
      {AllProjects.map((project) => (
        <StyledListItem key={project.id}>
        <img src={project.image} alt="blog cover" />
        <div className="info">
          <h2>
            <Link to={`/blog/${project.filename}`}>{project.title}</Link>
          </h2>
          <div className="dotted"></div>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" className="link">Visit the site here &rarr;</a>
          <List>
            
          </List>
        </div>
      </StyledListItem>
      ))}
    </StyledBlogList>
  );
};
const StyledBlogList = styled(MainSections)`
  padding-top: 0rem;
  padding-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height:auto;
`;

export default ProjectList;
