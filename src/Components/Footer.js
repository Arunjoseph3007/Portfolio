import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <StyledFooter>
      <div className="footer-content">
        <div className="pages">
          <h4>PAGES</h4>
          <ul>
            <li>
              <Link to="/">Home/About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="links">
          <h4>LINKS</h4>
          <ul>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Codepen</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="nothing">
          <h4>Made with React and Strapi, hosted on Netlify</h4>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  z-index: 100;
  padding-top: 5rem;
  backdrop-filter: blur(3px);
  color: #ffffff;
  box-shadow: 0 0 18px #202020 inset;
  background: #44444428;
  min-height: 50vh;
  width: 100%;
  h4 {
    letter-spacing: 0.1rem;
  }
  .footer-content {
    .pages,
    .links {
      width: 22%;
      height: 60%;
      // border-right: 2px solid white;
    }
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  ul {
    li {
      padding: 0.5rem 0rem;
      list-style: square;
    }
  }
  @media screen and (max-width: 860px) {
    .footer-content {
      width: 100%;
      padding: 3rem 6rem;
      flex-direction: column;
    }
    .pages,
    .links {
      font-size: 3rem;
      padding-top: 3rem;
      h4 {
        margin-bottom: 2.5rem;
      }
      li a {
        font-size: 2rem;
      }
      border: none;
    }
    .nothing {
      margin-top: 2rem;
      font-size: 1.4rem;
      text-align: center;
    }
  }
`;

export default FooterSection;
