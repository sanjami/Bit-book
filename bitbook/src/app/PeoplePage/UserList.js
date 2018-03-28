import React, { Component } from 'react';
import UserListItem from './UserListItem';

const UserList = (props) => {

    return (
        <div className="ui grid">
      <div class="four wide column"></div>
      <div className="eight wide column">
       <ul>
       {props.myUsers.map((user,i) => {
          return ( <div class="column">
           <UserListItem  oneUser={user} key ={user}/>
        </div>)
       })}
         </ul>
    </div>
    <div class="four wide column"></div>
      </div> 
    )
}

export default UserList;