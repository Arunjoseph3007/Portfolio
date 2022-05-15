//DEPENDENCIES
import React, { useEffect, useRef } from "react";
// import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
//COMPONENTS
import Nav from "./Components/Nav";
import Design from "./Components/lookAndFeel/Design";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogPage from "./Pages/BlogPage";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import FooterSection from "./Components/Footer";
//GLOBAL STYLES
import GlobalStyle from "./Components/lookAndFeel/GlobalStyle";
import { StyledCursor } from "./Components/lookAndFeel/ReusableStyles";
//FRamer motion
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const cursor = useRef();

  useEffect(() => {
    const listener = ({ clientX, clientY }) => {
      cursor.current.style.transform = `translate(${clientX - 25}px, ${clientY - 25}px)`;
    };

    const addClass = () => cursor.current.classList.add("cursorOnA");

    const removeClass = () => cursor.current.classList.remove("cursorOnA");

    const allLinks = document.querySelectorAll("a");

    window.addEventListener("mousemove", listener);

    allLinks.forEach((a) => a.addEventListener("mouseover", addClass));

    allLinks.forEach((a) => a.addEventListener("mouseout", removeClass));

    return () => {
      window.removeEventListener("mousemove", listener);

      allLinks.forEach((a) => a.removeEventListener("mouseover", addClass));

      allLinks.forEach((a) => a.removeEventListener("mouseout", removeClass));
    };
  }, [location.pathname]);

  return (
    <>
      <GlobalStyle />
      <StyledCursor ref={cursor} />
      <Nav />
      <Design />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} exact />
          <Route path="/blog" element={<Blog />} exact />
          <Route path="/projects" element={<Projects />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </AnimatePresence>
      <Design />
      <FooterSection />
    </>
  );
}

export default App;
