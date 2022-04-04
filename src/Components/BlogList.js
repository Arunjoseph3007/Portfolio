import React from "react";
import styled from "styled-components";
import BlogItem from "./BlogItem";
import { MainSections, SecTitle } from "./ReusableStyles";
import { AllPosts } from "../posts/Getdata";

const BlogList = () => {
  return (
    <StyledBlogList>
      <SecTitle style={{ marginBottom: "6rem" }}>
        You may like this<b>.</b>
      </SecTitle>
      {AllPosts.map((post) => (
        <BlogItem key={post.id} data={post} />
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

export default BlogList;
