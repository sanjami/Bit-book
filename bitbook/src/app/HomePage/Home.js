import React, { Component } from 'react';
import PostList from 'PostList';
import MenuAllPosts from 'MenuAllPosts';
import NewPostButton from 'NewPostButton';
import dataServices from '../../service/dataService'


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            textPost : [],
            imagePost : [],
            videoPost : []
        }
    }


    componentDidMount(){
        dataServices.getTextPost()
        .then((myTextPost)=>{
            this.setState({
                textPost : myTextPost
            })
        });
        dataServices.getImagePost()
        .then((myImagePost)=>{
            this.setState({
                imagePost : myImagePost
            })
        });
        dataServices.getVideoPost()
        .then((myVideoPost)=>{
            this.setState({
                videoPost : myVideoPost
            })
        })
    }

    allPosts = () => {
        let allPostsData = this.state.textPost.concat(this.state.imagePost, this.state.videoPost);
        let sortedPosts = allPostsData.sort(function(a, b){
            let keyA = new Date(a.dateCreated);
            let keyB = new Date(b.dateCreated);
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;   
        })
        // let postWithParseDate = allPostsData.map((post)=>{
        //     return Date.parse(post.dateCreated)
        // });

        return sortedPosts;
    }

render () {
    return (
        <div>
            <PostList posts = {allPosts()}/>
            {/* <MenuAllPosts />
            <NewPostButton /> */}
        </div>
    )
}


}