import React from 'react';

const PostItem = (props) => {
    if (props.onePost.type === "text") {
        return <div class="ui card">
            <div class="content">
                <p>{props.onePost.text}</p>
            </div>
            <div class="content">
                <span class="right floated">
                    <i class="comment icon"></i>
                    {props.onePost.commentsNum}
                </span>
                <i class="file alternate icon"></i>
                {props.onePost.type}
            </div>
        </div>
    } else if (props.onePost.type === "image") {
        return <div class="ui card">
            <div class="image">
                <img src={props.onePost.imageUrl} />
            </div>
            <div class="content">
                <span class="right floated">
                    <i class="comment icon"></i>
                    {props.onePost.commentsNum}
                </span>
                <i class="image icon"></i>
                {props.onePost.type}
            </div>
        </div>
    } else {
        return <div class="ui card">
            <iframe  height="315" src={props.onePost.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <div class="content">
                <span class="right floated">
                    <i class="comment icon"></i>
                    {props.onePost.commentsNum}
                </span>
                <i class="video icon"></i>
                {props.onePost.type}
            </div>
        </div>
    }
}

export default PostItem;
