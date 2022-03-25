import React, {useEffect, useState} from 'react';
import './Home.css'
import axios from "axios";
import {Link} from "react-router-dom";

const Home = () => {
const [redditPost, setRedditPost] =useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get("https://www.reddit.com/hot.json?limit=15")
                setRedditPost(result.data.data.children);
                console.log(result.data);
            }catch (e) {
                console.error(e);
            }
        }

        fetchData();
    },[]);

    return (
        <div>
            {redditPost &&
            <>
                <ul>
                    {redditPost.map((posts) => {
                    return(
                        <li key={posts.data.created}>
                            <h1>{posts.data.title}</h1>
                            <Link to="/subreddit/:subredditId">{posts.data.subreddit_name_prefixed}</Link>
                            <p>Comments {posts.data.num_comments} - Ups {posts.data.ups}</p>
                        </li>
                    )})
                    }
                </ul>
            </>
            }
        </div>
    );
};

export default Home;