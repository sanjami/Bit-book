import React from 'react';

const Search = (props) => {
    
    return (
        <div className="ui grid">
        <div className="four wide column"></div>
        <div className="eight wide column">
        <div className="ui category search">
            <input className="prompt" type="search" onChange={props.handleChange} value={props.inputValue} placeholder="Search..." />
        </div>
        </div>
        <div className="four wide column"></div>
        </div>
    )
}

export default Search;