import React from "react";
import BlogHead from "../Components/blog/BlogHead";
import BlogList from "../Components/blog/BlogList";
import useScrollToTop from "../Utils/useScrollToTop";

const Blog = () => {
  useScrollToTop()
  return (
    <>
      <BlogHead />
      <BlogList />
    </>
  );
};

export default Blog;
