import React from 'react';
import { Link } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';



const PostItem = (props) => {
    if (props.onePost.type === "text") {
        return <Container as='a' href={`#feeds/${props.onePost.type}${props.onePost.id}`} className="ui card">
            <div className="content">
                    <p>{props.onePost.text}</p>
            </div>
            <div className="content">
                <span className="right floated">
                    <i className="comment icon "></i>
                    {props.onePost.commentsNum}
                </span>
            <div className='content'><Button className='delete-btn' onClick={props.deleteMyPost}>Delete</Button></div>
                <i className="file alternate icon icon-type"></i>
                {props.onePost.type}
            </div>
        </Container>

    } else if (props.onePost.type === "image") {
        return <Container as="a" href={`#feeds/${props.onePost.type}${props.onePost.id}`} className="ui card">
            <div className="image">
                <img src={props.onePost.imageUrl} />
            </div>
                <div className="content">
                    <span className="right floated">
                        <i className="comment icon"></i>
                        {props.onePost.commentsNum}
                    </span>
                <div className='content'><Button  className='delete-btn' onClick={props.deleteMyPost}>Delete</Button></div>
                    <i className="image icon icon-type"></i>
                    {props.onePost.type}
                </div>
        </Container>

    } else {
        return <Container as="a" href={`#feeds/${props.onePost.type}${props.onePost.id}`} className="ui card">
            <iframe height="315" src={props.onePost.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                <div className="content">
                    <span className="right floated">
                        <i className="comment icon"></i>
                        {props.onePost.commentsNum}
                    </span>
                    <div className='content'><Button  className='delete-btn' onClick={props.deleteMyPost}>Delete</Button></div>
                    <i className="video icon icon-type"></i>
                    {props.onePost.type}
                </div>
        </Container>

    }
}

export default PostItem;
