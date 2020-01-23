import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import Col from "react-bootstrap/Col";
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const PostDesc = (props) => {

    const PostDescGroup = styled(ListGroup.Item)`
    height: 100%;
    padding: 0px;
  `;

  const PostDescItems = styled(ListGroupItem)`
    height: 325px;
    background: linear-gradient(#000, #0d0d0d);
    color: white;
    text-align: center;
    font-size: 25px;
    margin-bottom: 5px;
    padding: 100px;
  `;

  const Column = styled(Col)`
    padding: 0px;
  `;
    return (
        <Column sm={4}>
            <PostDescGroup>
                {props.postTitle.map(post => (
                    <PostDescItems>
                        {post.post_title}
                    </PostDescItems>
                ))}
            </PostDescGroup>
        </Column>

    )
}


export default PostDesc;