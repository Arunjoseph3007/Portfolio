//DEPENDENCIES
import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
//COMPONENTS
import Nav from "./Components/Nav";
import Design from "./Components/Design";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import BlogPage from "./Pages/BlogPage";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import FooterSection from "./Components/Footer";
//GLOBAL STYLES
import GlobalStyle from "./Components/GlobalStyle";
import { StyledCursor } from "./Components/ReusableStyles";
//FRamer motion
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const cursor = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.current.style.transform = `translate(${x - 25}px, ${y - 25}px)`;
    });

    document
      .querySelectorAll("a")
      .forEach((a) =>
        a.addEventListener("mouseover", () =>
          cursor.current.classList.add("cursorOnA")
        )
      );

    document
      .querySelectorAll("a")
      .forEach((a) =>
        a.addEventListener("mouseout", () =>
          cursor.current.classList.remove("cursorOnA")
        )
      );
  }, []);

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
