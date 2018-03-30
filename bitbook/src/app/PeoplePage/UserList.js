import React, { Component } from 'react';
import UserListItem from './UserListItem';

const UserList = (props) => {

    return (
        <div className="ui grid">
      <div class="six wide column"></div>
      <div className="four wide column">
       <ul>
       {props.myUsers.map((user) => {
          return ( <div class="column" key ={user.id}>
           <UserListItem  oneUser={user}/>
        </div>)
       })}
         </ul>
    </div>
    <div class="six wide column"></div>
      </div> 
    )
}

export default UserList;