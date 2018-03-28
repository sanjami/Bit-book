import React, { Component } from 'react';


const UserListItem = (props) => {

    const cutDate = () => {
        const dateUser = new Date(props.oneUser.upDate);
        return `${dateUser.getHours()}:${dateUser.getMinutes()}`;
    }



    return (
        <li className = 'list-users'>
            <div className="item user-picture user_data">
                <img className="ui avatar image" src="https://cdn3.iconfinder.com/data/icons/users/100/user_male_1-512.png" />
            <div className="content user-description">
                <a className="header">{props.oneUser.name}</a>
                <p>{props.oneUser.description}</p>
                <span>Last post <br/> at {cutDate()}</span>
            </div>
            </div>
        </li>
    )
}

export default UserListItem;