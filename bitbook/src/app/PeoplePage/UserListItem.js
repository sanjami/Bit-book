import React, { Component } from 'react';


const UserListItem = (props) => {

    return (
        <div class="ui list">
            <div class="item">
                <img class="ui avatar image" src="/images/avatar2/small/rachel.png" />
            <div class="content">
                <a class="header">Rachel</a>
                <div class="description">Last seen watching <a><b>Arrested Development</b></a> just now.</div>
            </div>
            </div>
        </div>
    )
}

export default UserListItem;