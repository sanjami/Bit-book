import React, { Component } from 'react';


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
                    <a className="item border">
                        Feed
            </a>
                </div>
                <div className="column">

                    <a className="item border">
                        People
            </a>
                </div>
                <div className="column">
                    <a className="item">
                        Profile
            </a>
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