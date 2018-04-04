import React from 'react';
import { Link } from "react-router-dom";
import { authService } from '../../service/authenticationService'

const Header = () => {

  const handleClick = () => {
    authService.userLogout();
  }
  
    return <div className="ui grid bgColor">
        <div className="two wide column" />
        <div className="two wide column">
          <h1 className="logo-app">Bitbook</h1>
        </div>

        <div className="seven wide column" />
        <div className="one wide column nav-links">
          <button onClick={handleClick}>
            Logout
          </button>
        </div>
        <div className="one wide column nav-links">
          <Link to="/" className="header-link">
            Feed
          </Link>
        </div>
        <div className="one wide column nav-links">
          <Link to="/people" className="header-link">
            People
          </Link>
        </div>
        <div className="one wide column nav-links">
          <Link to="/profile" className="header-link">
            Profile
          </Link>
        </div>
      </div>;
}



export default Header;