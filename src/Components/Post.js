import React from "react";

const Post = ({ post }) => {
  const data = post.attributes;
  return (
    <div className="post">
      <h1>{data.title}</h1>
      <div className="content">{data.content}</div>
    </div>
  );
};

export default Post;
