import React, { Component } from 'react';
import { dataServices } from '../../service/dataService';
import PostList from '../HomePage/PostList';
import PostItem from '../sharedComponents/PostItem';

class VideoPostDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {}
        }
    }
componentDidMount() {
    dataServices.getVideoPost(this.props.match.params.id)
    .then((myPost) => {
        this.setState({
            post : myPost
        })
    })
}

    render() {
        return(
            <div className="ui three column grid">
                <div className="row">
                    <div className='four wide column'></div>
                    <div className='eight wide column'>
                        <PostItem onePost={this.state.post} />
                    </div>
                    <div className='four wide column'>
                    </div>
                </div>
            </div>
        )
    }
} 

export default VideoPostDetails;