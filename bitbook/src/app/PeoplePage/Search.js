import React, { Component } from 'react';

const Search = (props) => {
    
    return (
        <div className="ui grid">
        <div class="four wide column"></div>
        <div className="eight wide column">
        <div className="ui category search">
            <input className="prompt" type="search" onChange={props.handleChange} value={props.inputValue} placeholder="Search..." />
        </div>
        </div>
        <div class="four wide column"></div>
        </div>
    )
}

export default Search;