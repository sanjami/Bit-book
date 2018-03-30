import React from 'react';

const Search = (props) => {
    
    return (
        <div className="ui grid">
        <div className="six wide column"></div>
        <div className="four wide column">
        <div className="ui category search">
            <input className="prompt search-users" type="search" onChange={props.handleChange} value={props.inputValue} placeholder="Search..." />
        </div>
        </div>
        <div className="six wide column"></div>
        </div>
    )
}

export default Search;