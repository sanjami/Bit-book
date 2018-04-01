import React, { Component } from 'react';
import UserList from './UserList';
import Search from './Search';
import {dataServices} from '../../service/dataService';

class People extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            users : [],
            filterUsers : []
        };
    }

    componentDidMount() {
        dataServices.getUsers()
        .then(allUsers => {
            
            this.setState({
                users : allUsers
            });
        });
    }

    handleChange = (event) => {
		let inputValue = event.target.value;
		let newUsers = this.state.users.filter((user) => user.name)
		this.setState({
			filterUsers: newUsers
		})
	}
    
    render() {
        console.log(this.state.filterUsers)
        return (<div className="ui grid">
            <div class="five wide column" />
            <div className="six wide column">
            <Search handleChange={this.handleChange} inputValue={this.state.inputValue} />
            <UserList myUsers={this.state.users} />
            </div>
             <div class="five wide column"></div>
          </div>)
    }


}


export default People;