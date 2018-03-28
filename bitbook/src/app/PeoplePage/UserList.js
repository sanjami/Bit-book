import React, { Component } from 'react';
import UserListItem from './UserListItem';

const UserList = (props) => {

    return (
       <div class="ui two column centered grid">
       <ul>
       {props.myUsers.map((user,i) => {
          return ( <div class="column">
           <UserListItem  oneUser={user} key ={user}/>
        </div>)
       })}
         </ul>
      </div> 
    )
}

export default UserList;