import React, { useEffect } from "react";
import styled from "styled-components";
import {
  MainSections,
  SecTitle,
  List,
} from "../lookAndFeel/ReusableStyles";
import { AllProjects } from "../../posts/Getdata";
import { Controller, Scene } from "scrollmagic";

const ProjectList = () => {
  useEffect(() => {
    const controller = new Controller();
    new Scene({
      duration: "200%",
      triggerElement: ".l-tab",
      triggerHook: 0,
    })
      .setPin(".l-tab")
      .addIndicators()
      .addTo(controller);
  }, []);

  return (
    <StyledBlogList>
      <SecTitle style={{ marginBottom: "6rem" }}>
        Take a Look<b>.</b>
      </SecTitle>
      <StyledProjectList>
        <div className="tab l-tab">
          <h1>Projects</h1>
        </div>
        <div className="tab r-tab">
          {AllProjects.map((project) => (
            <div className="project-tab">
              <div className="head">
                <img src={project.image} />
                <h1>{project.title}</h1>
              </div>
              <p>{project.description}</p>
              <List>
                {project?.stack?.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </List>
              <a href={project.link} target="_blank" className="link">
                Visit the site here &rarr;
              </a>
            </div>
          ))}
        </div>
      </StyledProjectList>
    </StyledBlogList>
  );
};

const StyledBlogList = styled(MainSections)`
  padding-top: 0rem;
  padding-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

const StyledProjectList = styled.div`
  padding-inline: 0;
  height: 300vh;
  display: flex;
  align-items: space-between;
  .tab {
    flex: 1;
    width: 50%;
  }
  .l-tab {
    height: 100vh;
    h1 {
      text-transform: uppercase;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 6.5rem;
      font-weight: bolder;
      color: gray;
      margin-top:5rem;
    }
  }
  .r-tab {
    .project-tab {
      height: 100vh;
      a{
        margin-top:1rem;
        color:#23d997;
        display:block;
      }
      .head {
        position: relative;
        margin-bottom: 1rem;
        &::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 1%, black 85%);
        }
        img {
          width: 100%;
        }
        h1 {
          position: absolute;
          bottom: 20px;
          text-transform: uppercase;
          font-size: 2.5rem;
        }
      }
    }
  }
`;

export default ProjectList;
