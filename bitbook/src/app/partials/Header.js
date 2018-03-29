import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui grid header">
            <div className="eight column row">
                <div className="column"></div>
                <div className="column">
                    <h1>Bitbook</h1>
                </div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column">
                    <Link to="/">
                        Feed
                    </Link>
                </div>
                <div className="column">

                    <Link to="/people">
                        People
                    </Link>

                </div>
                <div className="column">
                    <Link to="/profile">
                        Profile
                    </Link>
                </div>
            </div>
        </div>

        // <div className="ui inverted menu ui-grid ui three column grid">
        // <div className='row'>
        // <div className ='column'>
        //     <h1>Bitbook</h1>
        //  </div>
        //  <div className='column'>   


        //     </div>
        //     </div>
        // </div>

    )
}



export default Header;