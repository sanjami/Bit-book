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
            imagePosts: []
        }
    }


    componentDidMount() {
        dataServices.getPosts()
            .then((myPosts) => {
                this.setState({
                    textPosts: myPosts.textPosts,
                    videoPosts: myPosts.videoPosts,
                    imagePosts: myPosts.imagePosts
                })
            });
    }

    sortPosts = () => {
        let allPosts = this.state.textPosts.concat(this.state.videoPosts, this.state.imagePosts)
        let sortPosts = allPosts.sort(function (a, b) {
            let keyA = new Date(a.dateCreated);
            let keyB = new Date(b.dateCreated);
            if (keyA > keyB) return -1;
            if (keyA < keyB) return 1;
            return 0;
        })
        return sortPosts;
    }

    render() {
        return (
            <div className="ui three column grid">
                <div class="row">
                    <div className='four wide column'></div>
                    <div className='eight wide column'><PostList posts={this.sortPosts()} />
                    </div>
                    <div className='four wide column'>
                        <MenuAllPosts />
                        {/* <NewPostButton /> */}
                    </div>

                </div>
            </div>
        )
    }


}

export default Home;