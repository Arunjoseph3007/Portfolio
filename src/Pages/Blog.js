import React from "react";
import BlogHead from "../Components/BlogHead";
import BlogList from "../Components/BlogList";

const Blog = ({ activeBlog, setActiceBlog }) => {
  return (
    <>
      <BlogHead />
      <BlogList />
    </>
  );
};

export default Blog;
