import React from 'react';
import PostItem from '../sharedComponents/PostItem'

const PostList = (props) => {
    return (
      <div class="ui one cards">
         {props.posts.map((post)=><PostItem onePost={post} key ={post.id}/>)}
       </div>
        
    )
}

export default PostList;