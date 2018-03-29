import React, { Component } from 'react';
import { dataServices } from '../../service/dataService';
import UserCard from './UserCard';
import PostAndCommentsCount from './PostAndCommentsCount';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }


    componentDidMount() {
        console.log(this.props)
        dataServices.getUser(this.props.match.params.id)
        .then((myUser) => {
            console.log(myUser);
            this.setState({
                user : myUser
            })
        })
    }

    render() {
        return (
            <div className="ui three column grid">
                <div className="row">
                    <div className='four wide column'></div>
                    <div className='eight wide column'>
                    <UserCard user={this.state.user}/>
                    <PostAndCommentsCount user={this.state.user}/>
                    </div>
                    <div className='four wide column'>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
