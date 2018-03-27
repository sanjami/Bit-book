import React, { Component } from 'react';

const Search = () => {
    return (
        <div class="ui search">
            <input class="prompt" type="text" placeholder="Search..." />
            <div class="results"></div>
        </div>
    )
}

export default Search;