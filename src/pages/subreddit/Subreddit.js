import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import back from '../../assets/back.svg'

const Subreddit = () => {
    const[subreddit, setSubreddit] = useState();
    const {subredditId} = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`)
                console.log(result.data);
                setSubreddit(result.data);
            }catch (e) {
                console.error(e);
            }
        }

        fetchData();
    },[]);

    return (
        <div>
            {subreddit &&
            <>
                <article>
                    <h2>Title</h2>
                    <p>{subreddit.data.title}</p>
                    <h2>Description</h2>
                    <p>{subreddit.data.public_description}</p>
                    <h2>Number of subscribers</h2>
                    <p>{subreddit.data.subscribers}</p>
                </article>
            </>
            }
            <div className="svg-button">
                <img src={back} alt="back-button" /><Link to="/">Take me back</Link>
            </div>
                    </div>
    );
};

export default Subreddit;