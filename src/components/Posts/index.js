import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import PostDesc from '../PostDesc';
import PostImage from '../PostImage';



class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch('https://www.everythingzoomer.com/wp-json/zm-content/v1/getfeaturedfour')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: result
                    })
                }
            )

    }

    render() {
        const PostContainer = styled(Container)`
        max-width: 100%;
      `;

        return (
            <div className='postContainer'>
                <div className='postImageContainer'>
                    <PostContainer>
                        <Row>
                            {console.log('this.state.items', this.state.items)}
                            <PostDesc postTitle={this.state.items} />
                            <PostImage postDetails = {this.state.items}/>
                        </Row>
                    </PostContainer>
                </div>
            </div>
        )
    }
}

export default Posts;