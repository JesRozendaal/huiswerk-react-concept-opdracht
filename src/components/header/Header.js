import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
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
    );
};

export default Header;