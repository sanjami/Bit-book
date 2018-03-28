import React, { Component } from 'react';
import PostList from './PostList';
import MenuAllPosts from './MenuAllPosts';
//import NewPostButton from 'NewPostButton';
import { dataServices } from '../../service/dataService'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textPosts: [],
            videoPosts: [],
            imagePosts: [],
            selectedPosts: []
        }
    }

  

    componentDidMount() {
        dataServices.getPosts()
            .then((myPosts) => {
                this.setState({
                    textPosts: myPosts.textPosts,
                    videoPosts: myPosts.videoPosts,
                    imagePosts: myPosts.imagePosts,
                    selectedPosts:  myPosts.textPosts.concat(myPosts.videoPosts, myPosts.imagePosts)
                })
            });
    }

    handleChange = (event, data) => {
     if(data.value === "text"){
         this.setState({
             selectedPosts : this.state.textPosts
         })
     } else if(data.value === "images"){
         this.setState({
             selectedPosts : this.state.imagePosts
         })
     } else {
         this.setState({
             selectedPosts : this.state.videoPosts
         })
     }
    }

    render() {
        return (
            <div className="ui three column grid">
                <div className="row">
                    <div className='four wide column'></div>
                    <div className='eight wide column'><PostList posts={this.state.selectedPosts} />
                    </div>
                    <div className='four wide column'>
                        <MenuAllPosts handleChange={this.handleChange}/>
                        {/* <NewPostButton /> */}
                    </div>

                </div>
            </div>
        )
    }


}

export default Home;