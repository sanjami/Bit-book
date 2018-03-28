import React, { Component } from 'react';

const Search = (props) => {
    return (
        <div class="ui search">
            <input class="prompt" type="text" placeholder="Search..." />
            <div class="results"></div>
        </div>
    )
}

export default Search;