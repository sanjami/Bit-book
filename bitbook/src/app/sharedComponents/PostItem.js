import React from 'react';
import { Link } from "react-router-dom";

const PostItem = (props) => {
    if (props.onePost.type === "text") {
        return <div className="ui card">
            <div className="content">
                <Link to={`feeds/${props.onePost.type}${props.onePost.id}`}>
                    <p>{props.onePost.text}</p>
                </Link>
            </div>
            <div className="content">
                <span className="right floated">
                    <i className="comment icon"></i>
                    {props.onePost.commentsNum}
                </span>
                <i className="file alternate icon"></i>
                {props.onePost.type}
            </div>
        </div>

    } else if (props.onePost.type === "image") {
        return <div className="ui card">
            <div className="image">
                <img src={props.onePost.imageUrl} />
            </div>
            <Link to={`feeds/${props.onePost.type}${props.onePost.id}`}>
                <div className="content">
                    <span className="right floated">
                        <i className="comment icon"></i>
                        {props.onePost.commentsNum}
                    </span>
                    <i className="image icon"></i>
                    {props.onePost.type}
                </div>
            </Link>
        </div>

    } else {
        return <div className="ui card">
            <iframe height="315" src={props.onePost.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <Link to={`feeds/${props.onePost.type}${props.onePost.id}`}>
                <div className="content">
                    <span className="right floated">
                        <i className="comment icon"></i>
                        {props.onePost.commentsNum}
                    </span>
                    <i className="video icon"></i>
                    {props.onePost.type}
                </div>
            </Link>
        </div>

    }
}

export default PostItem;
