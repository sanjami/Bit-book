import React, { Component } from 'react';
import UserList from './UserList';
import Search from './Search';
import {dataServices} from '../../service/dataService';

class People extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            users : [],
            filterUsers : [],
            searchUsers: false
        };
    }

    /* Getting all users from API response */ 

    componentDidMount() {
        dataServices.getUsers()
        .then(allUsers => {
            
            this.setState({
                users : allUsers
            });
        });
    }

    /* Search bar for users */ 

    handleChange = (event) => {
		let inputValue = event.target.value;
		let newUsers = this.state.users.filter((user) => `${user.name}`.toLowerCase().includes(inputValue.toLowerCase()))
		this.setState({
            filterUsers: newUsers,
            searchUsers: true
        
		})
    }
    
    
    checkSearchUsers = () => {
        if(this.state.searchUsers == true) {
            return this.state.filterUsers
        } else {
            return this.state.users
        }
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