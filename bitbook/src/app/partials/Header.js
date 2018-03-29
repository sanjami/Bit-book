import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui grid bgColor">
        <div className="two wide column"></div>
            <div className="two wide column">
                <h1 className='logo-app'>Bitbook</h1>
                </div>
            <div className="eight wide column"></div>
                <div className="one wide column nav-links">
                    <Link to="/">
                        Feed
                    </Link>
                </div>
                <div className="one wide column nav-links">

                    <a className="item border">
                        People
            </a>
                </div>
                <div className="one wide column nav-links">
                    <a className="item">
                        Profile
            </a>
                </div>
            </div>

    )
}



export default Header;