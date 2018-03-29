import React, { Component } from 'react';
import { dataServices } from '../../service/dataService';
import PostList from '../HomePage/PostList';
import PostItem from '../sharedComponents/PostItem';
import AddCommentForm from './AddCommentForm';
import CommentList from './CommentList'

class ImagePostDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            comments : []
        }
    }
    componentDidMount() {
        dataServices.getImagePost(this.props.match.params.id)
            .then((myPost) => {
                this.setState({
                    post: myPost
                })            
            dataServices.getComment(myPost.id)
            .then((myComments) => {
                this.setState({
                    comments : myComments
                })
            })
        })
    }

    render() {
        console.log(this.state.comments);
        return (
            <div className="ui three column grid">
                <div className="row">
                    <div className='four wide column'></div>
                    <div className='eight wide column'>
                        <PostItem onePost={this.state.post} />
                        <AddCommentForm postId={this.state.post.id}/>
                        <CommentList comments={this.state.comments}/>
                    </div>
                    <div className='four wide column'>
                    </div>
                </div>
            </div>

        )
    }
}

export default ImagePostDetails;