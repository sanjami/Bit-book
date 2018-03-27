import React, { Component } from 'react';
import UserListItem from './UserListItem';

const UserList = (props) => {




    return (
       <div class="ui two column centered grid">
       {props.people.map(() => {
          return ( <div class="column">
           <UserListItem  />
        </div>)
       })}
         
      </div> 
    )
}

export default UserList;