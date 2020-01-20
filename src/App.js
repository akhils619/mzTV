import React from "react";
import "./App.css";
import Header from "./components/Header";
import PostImage from "./containers/PostImage";
import PostDesc from "./containers/PostDesc";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

function App() {
  
  const PostContainer = styled(Container)`
    max-width: 100%;
  `;

  return (
    <div>
      <Header />
      <PostContainer>
        <Row>
          <Col sm={4}>
          <PostDesc/>
          </Col>
          <Col sm={8}>
            <PostImage />
          </Col>
        </Row>
      </PostContainer>
    </div>
  );
}

export default App;
