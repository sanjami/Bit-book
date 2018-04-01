import React, { Component } from 'react';
import UserListItem from './UserListItem';

const UserList = (props) => {

    return (
        <div>
       {props.myUsers.map((user) => {
          return ( <div class="column" key ={user.id}>
           <UserListItem  oneUser={user}/>
        </div>)
       })}
         
      </div> 
    )
}

export default UserList;