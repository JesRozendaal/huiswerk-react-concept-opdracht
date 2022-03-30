import React from 'react';
// import {NavLink} from "react-router-dom";
import './Header.css';


const Header = ({img, text, subtext}) => {
    return (
        <>
                <div className="inner-container">
                    <nav>
                        <ul>
                            <li>
                                {/*<NavLink to="/">*/}
                                    HOTTEST POSTS
                                {/*</NavLink>*/}
                            </li>
                            <li>
                                {/*<NavLink to="https://www.reddit.com">*/}
                                    REDDIT
                                {/*</NavLink>*/}
                            </li>
                            <li>
                                {/*<NavLink to="/subreddit/:subredditId">*/}
                                    MEMES
                                {/*</NavLink>*/}
                            </li>
                        </ul>
                    </nav>
                    <div className="header-content">
                        <img src={img} alt="" width="100px"/>
                        <h1>{text}</h1>
                        <h6>{subtext}</h6>
                    </div>
                </div>
            </>
    );
};

export default Header;