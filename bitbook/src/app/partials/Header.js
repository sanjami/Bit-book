import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (

        <div className="ui grid bgColor">
        <div className="two wide column"></div>
            <div className="two wide column">
                <h1 className='logo-app'>Bitbook</h1>

        <div className="ui grid header">
            <div className="eight column row">
                <div className="column"></div>
                <div className="column">
                    <h1>Bitbook</h1>

                </div>
            <div className="eight wide column"></div>
                <div className="one wide column nav-links">
                    <Link to="/">
                        Feed
                    </Link>
                </div>
                <div className="one wide column nav-links">

                    <Link to="/people">
                        People
                    </Link>

                </div>

                <div className="one wide column nav-links">
                    <a className="item">

                <div className="column">
                    <Link to="/profile">

                        Profile
                    </Link>
                </div>
            </div>

    )
}



export default Header;