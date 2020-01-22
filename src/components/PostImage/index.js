import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import Col from "react-bootstrap/Col";
import styled from "styled-components";


const PostImage = (props) => {

    const Column = styled(Col)`
    padding: 0px;
`;
    return (
        <Column sm={8}>
            <Carousel>
                {props.postDetails.map(post => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={post.post_thumb}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{post.post_cat}</h3>
                            <p>{post.post_title}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Column>
    )
}


export default PostImage;