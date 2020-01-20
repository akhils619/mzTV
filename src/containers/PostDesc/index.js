import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

const PostDesc = () => {

    const PostDescItems = styled(ListGroup.Item)`
    height: 100px;
  `;

    return (
        <div className='postDescContainer'>
            <ListGroup>
                <PostDescItems>First slide</PostDescItems>
                <PostDescItems>Second slide</PostDescItems>
                <PostDescItems>Third slide</PostDescItems>
                <PostDescItems>Fourth slide</PostDescItems>
                <PostDescItems>Fifth slide</PostDescItems>
            </ListGroup>
        </div>
    )
}


export default PostDesc;