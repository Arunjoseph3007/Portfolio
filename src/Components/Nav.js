import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const btnStyles = {
  backgroundColor:"transparent",
  border:"none",
  padding:"0rem 2rem",
}

const Nav = () => {
  const Url = window.location.pathname;
  const navTab = useRef()

  const handler = ()=>setIsOpen(false)

  useEffect(
    () => {
      const listener = (event) => {
        if (!navTab.current || navTab.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [navTab]
  );

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar>
      <Link to="/">
        <h1 className="logo">
          <span>My</span> Blog
        </h1>
      </Link>
      <button style={btnStyles} onClick={()=>setIsOpen(!isOpen)}>
        <svg 
          style={{transform:`rotate(${isOpen ? "180deg" : "0deg"})`,transition:"all 0.3s ease"}}
          xmlns="http://www.w3.org/2000/svg" 
          height="25"
          width="25"
          viewBox="0 0 20 20" 
          fill="white">
          <path 
            fillRule="evenodd" 
            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" 
            clipRule="evenodd" />
          <path 
            fillRule="evenodd" 
            d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" 
            clipRule="evenodd" />
        </svg>
      </button>
      <ul className="nav-container">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <div className={`line ${Url === "/" ? "active" : ""}`}></div>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <div className={`line ${Url === "/blog" ? "active" : ""}`}></div>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <div className={`line ${Url === "/contact" ? "active" : ""}`}></div>
        </li>
      </ul>
      <ul ref={navTab} style={{display: isOpen ? "block":'none'}} className="mob-container">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </Navbar>
  );
};

const Navbar = styled.div`
  width:100%
  background-color: #000000;
  color: #fff;
  display: flex;
  align-items: center;
  height: 15vh;
  padding: 0rem 5rem;
  justify-content: space-between;
  position:relative;
  h1 {
    font-weight: bolder;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    span {
      font-weight: 200;
    }
  }
  .mob-container {
    background-color:black;
    z-index:99999;
    position:fixed;
    top:15vh;
    left:0;
    right:0;
    list-style:none;
    border-top:2px solid #bdbdbd;
    li{
      padding:1rem;
      display:block;
      font-size:2rem;
      border-bottom:2px solid #bdbdbd;
    }
  }
  .nav-container {
    display: flex;
    list-style: decimal-leading-zero;
    li {
      padding: 1.1rem;
      margin-left: 4rem;
      position: relative;
      .line {
        transition: all 0.4s ease;
        height: 4px;
        background: #fff;
        position: absolute;
        bottom: 7px;
        left: -30px;
        right:150px;
        &.active {
          right: 10px;
        }
      }
      a {
        font-size: large;
        color: #ffffff;
        text-decoration: none;
      }
    }
  }
  button{
    display:none;
  }
  @media screen and (max-width: 860px){
    padding:0rem 3rem;
    .nav-container{
      display:none;
    }
    button{
      display:inline;
    }
  }
`;

export default Nav;
