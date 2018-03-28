import React from 'react';
import PostItem from '../sharedComponents/PostItem'

const PostList = (props) => {
  let sortPosts = () => {
    
    let sortedPosts = props.posts.sort(function (a, b) {
        let keyA = new Date(a.dateCreated);
        let keyB = new Date(b.dateCreated);
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
    })
return sortedPosts;
}
let finalPosts = sortPosts();
    return (
      <div className="ui one cards">
         {finalPosts.map((post)=><PostItem onePost={post} key ={post.id}/>)}
       </div>
        
    )
}

export default PostList;