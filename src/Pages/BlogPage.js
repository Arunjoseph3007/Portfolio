import React, { useEffect, useState } from "react";
import {
  MainSections,
  Title,
  List,
  SecTitle,
  MarkdownSection,
} from "../Components/lookAndFeel/ReusableStyles";
import { AllPosts } from "../posts/Getdata";
import ReactMarkdown from "react-markdown";
import useScrollToTop from "../Utils/useScrollToTop";

function BlogPage() {
  const [post, setPost] = useState();
  const fileName = window.location.href.slice(
    window.location.href.indexOf("/blog") + 6
  );

  useScrollToTop()

  useEffect(() => {
    import(`../posts/${fileName}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [fileName]);
  const [ThisPost] = AllPosts.filter((p) => (p.filename = fileName));

  return (
    <>
      <MainSections
        style={{
          background: `url(${ThisPost.image})`,
          textShadow: "0 0 30px 10px black",
        }}
      >
        <Title>
          <span>Blog {ThisPost.id + 1}</span>
          <br />
          {ThisPost.title}
          <b>.</b>
        </Title>
        <p>{ThisPost.description}</p>
        <List>
          {ThisPost.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </List>
      </MainSections>
      <MarkdownSection>
        <SecTitle>{ThisPost.title}<b>.</b></SecTitle>
        <ReactMarkdown className="write">{post}</ReactMarkdown>
      </MarkdownSection>
    </>
  );
}

export default BlogPage;
