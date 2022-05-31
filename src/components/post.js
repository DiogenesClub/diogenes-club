import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import postList from "../data/blog.json";
import { Container, Content, H2, Small } from "./post.style";

const Post = () => {
  const params = useParams();
  const fetchedPost = {};
  postList.forEach((post, i) => {
    if (params.id === post.id) {
      fetchedPost.title = post.title ? post.title : "No title";
      fetchedPost.author = post.author ? post.author : "No author";
      fetchedPost.description = post.description
        ? post.description
        : "No description";
      fetchedPost.date = post.date ? post.date : "No date";
      fetchedPost.content = post.content ? post.content : "No content";
      console.log(post);
    }
  });
  if (!fetchedPost.title) {
    return <Navigate to="/" />;
  }
  return (
    <Container>
      <Content>
        <H2>{fetchedPost.title}</H2>
        <Small>
          Published on {fetchedPost.date} by {fetchedPost.author}
        </Small>
        <br/>
        <hr/>
        <br/>
        <ReactMarkdown>{fetchedPost.content}</ReactMarkdown>
      </Content>
    </Container>
  );
};

export default Post;
