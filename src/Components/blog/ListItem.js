import React from "react";
import { List, StyledListItem } from "../lookAndFeel/ReusableStyles";
import { Link } from "react-router-dom";

const BlogItem = ({ data }) => {
  return (
    <StyledListItem>
      <img src={data.image} alt="blog cover" />
      <div className="info">
        <h2>
          <Link to={`/blog/${data.filename}`}>{data.title}</Link>
        </h2>
        <div className="dotted"></div>
        <p>{data.description}</p>
        <List>
          {data.tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </List>
      </div>
    </StyledListItem>
  );
};


export default BlogItem;
