import React from "react";
import styled from "styled-components";
import { List } from "./ReusableStyles";
import { Link } from "react-router-dom";

const BlogItem = ({ data }) => {
  return (
    <StyleBlogItem>
        <img src={data.image} alt="blog cover" />
      <div className="info">
        <h2>
          <Link to={`/blog/${data.filename}`}>{data.title}</Link>
        </h2>
        <div className="dotted"></div>
        <p>{data.description}</p>
        <List>
          {data.tags.map((tag,i) => (
            <li key={i}>{tag}</li>
          ))}
        </List>
      </div>
    </StyleBlogItem>
  );
};

const StyleBlogItem = styled.div`
  width: 100%;
  max-width: 1050px;
  margin: 3rem;
  border-radius: 7px;
  border: 2px solid grey;
  display: flex;
  justify-content: center;
  padding: 2rem 2rem;
  img {
    width: 100%;
    max-width:500px;
    aspect-ratio:1.8;
    border-radius: 5px;
    object-fit: cover;
  }
  .info {
    padding: 0 2rem;
    h2 {
      font-size: 2.3rem;
    }
    .dotted {
      box-sizing: content-box;
      margin-block: 1rem;
      width: 100%;
      height: 3px;
      border-top: 3px dashed #23d997;
    }
  }
  @media screen and (max-width: 860px){
   flex-direction:column; 
   img{
    margin-bottom:2rem;
   }
   .info{
    padding:0;
   }
  }
`;

export default BlogItem;
