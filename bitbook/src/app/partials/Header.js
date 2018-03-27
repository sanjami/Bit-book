import React, { Component } from 'react';


const Header = () => {
    return (
        <div class="ui inverted menu">
            <h1>Bitbook</h1>
            <a class="active item">
                Feed
            </a>
            <a class="item">
                People
            </a>
            <a class="item">
                Profile
            </a>
        </div>
    )
}



export default Header;