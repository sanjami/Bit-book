import React, { Component } from 'react';
import UserList from './UserList';
import Search from './Search';
import {dataServices} from '../../service/dataService';

class People extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            users : [],
         
        };
    }

    componentDidMount() {
        dataServices.getUser()
        .then(allUsers => {
            
            this.setState({
                users : allUsers
             
            });
        });
    }



    render() {
        console.log(this.state.users)
        return (
            <div>
            {/* <Search  myUsers={this.state.users}/> */}
            <UserList myUsers={this.state.users}/>
            </div>

        )
    }


}


export default People;