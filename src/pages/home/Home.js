import React, {useEffect, useState} from 'react';
import './Home.css'
import axios from "axios";
import {Link} from "react-router-dom";

const Home = () => {
const [redditPost, setRedditPost] =useState(null);

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
        <div className="inner-container">
            {redditPost &&
            <>
                <section className="container-text">
                    <article>
                        <h2>Hottest posts</h2>
                        <h6>on Reddit right now</h6>
                    </article>
                </section>
                    {redditPost.map((posts) => {
                    return(
                        <section className="container-little-box">
                            <article key={posts.data.id}>
                                <h3 className="container-title"><a className="link-reddit" href={posts.data.url} target="_blank">{posts.data.title}</a></h3>
                                <Link className="link-subreddit" to={`subreddit/${posts.data.subreddit}`}><strong>{posts.data.subreddit_name_prefixed}</strong></Link>
                                <p>Comments {posts.data.num_comments} - Ups {posts.data.ups}</p>
                            </article>
                        </section>
                    )})
                    }
            </>
            }
        </div>
    );
};

export default Home;