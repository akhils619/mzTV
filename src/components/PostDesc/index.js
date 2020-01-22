import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import Col from "react-bootstrap/Col";
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const PostDesc = (props) => {

    const PostDescGroup = styled(ListGroup.Item)`
    height: 100%;
    padding:0px
  `;

    const PostDescItems = styled(ListGroupItem)`
    height: 200px;
    background-color: black;
    color: white;
    text-align: center;
    font-size: 30px;
    margin-bottom: 5px
    
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