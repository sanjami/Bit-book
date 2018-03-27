import React, { Component } from 'react';
import UserList from './UserList';
import Search from './Search';

class People extends Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
    }

    componentDidMount() {

    }
    render() {
        return (
            <div>
            <Search />
            <UserList />
            </div>

        )
    }


}


export default People;