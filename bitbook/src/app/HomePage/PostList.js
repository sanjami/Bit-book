import React from 'react';
import PostItem from '../sharedComponents/PostItem'

const PostList = (props) => {
    return (
       <ul>
         {props.posts.map((post)=><PostItem onePost={post} key ={post.id}/>)}
       </ul>
        
    )
}

export default PostList;