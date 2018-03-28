import React from 'react';

const PostItem = (props) => {
    if (props.onePost.type === "text") {
        return <div className="ui card">
            <div className="content">
                <p>{props.onePost.text}</p>
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
            <div className="content">
                <span className="right floated">
                    <i className="comment icon"></i>
                    {props.onePost.commentsNum}
                </span>
                <i className="image icon"></i>
                {props.onePost.type}
            </div>
        </div>
    } else {
        return <div className="ui card">
            <iframe  height="315" src={props.onePost.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div className="content">
                <span className="right floated">
                    <i className="comment icon"></i>
                    {props.onePost.commentsNum}
                </span>
                <i className="video icon"></i>
                {props.onePost.type}
            </div>
        </div>
    }
}

export default PostItem;
