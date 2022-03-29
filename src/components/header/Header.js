import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <>
                <div className="inner-container">
        <nav>
            <NavLink to="/">
                Hottest Posts
            </NavLink>
            <NavLink to="https://www.reddit.com">
                Reddit
            </NavLink>
            <NavLink to="/subreddit/:subredditId">
                Memes
            </NavLink>
        </nav>
                </div>
                <div className="header-content">
                    <img src={Logo} alt="Reddit logo" className="reddit-logo"/>
                    <h1>Reddit</h1>
                </div>
            </>
    );
};

export default Header;