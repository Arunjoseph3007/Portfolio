import React from "react";
import styled from "styled-components";
import { MainSections, Title, Line } from "../lookAndFeel/ReusableStyles";

function AboutMe() {
  return (
    <StyledAboutMe>
      <Title>
        about me<b>.</b>
      </Title>
      <div className="containers presently">
        <h2>Presently</h2>
        <Line />
        <p>
          Learning Computer Science  /  Student at DJ Sanghvi College (Bachelors in Computer Science)
           /  
        </p>
      </div>
      <div className="containers personally">
        <h2>Personally</h2>
        <Line />
        <p>
          Loves to code  /  Keen about maths / Man United Fan  /  Football is Life
           /  Enjoy Learning  /  Love to be a Teacher someday  /  Music Lover  /  
          Self taught Music producer (Just a little bit)  /  Loves Creating stuff  /  
        </p>
      </div>
      <div className="containers profesionaly">
        <h2>Professionally</h2>
        <Line />
        <p>
          Web Developer / Front End Development Using React / Dabbles in the backend with MERN Stack / Firebase And Firestore / 
        </p>
      </div>
    </StyledAboutMe>
  );
}
const StyledAboutMe = styled(MainSections)`
  height:auto;
  padding-bottom: 3rem;
  margin-top: 0;
  .containers {
    width: 90%;
    max-width: 800px;
  }
  p {
    line-height: 1.7rem;
    font-size: 1rem;
    letter-spacing: 0.05rem;
  }
  h2 {
    padding-top: 3rem;
    font-size: 2.6rem;
    color: #dbdbdb;
  }
`;

export default AboutMe;
