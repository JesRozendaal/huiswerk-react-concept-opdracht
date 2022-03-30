import React, {useEffect, useState} from 'react';
import './Home.css'
import axios from "axios";
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import Logo from "../../assets/logo.png";

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
        <>
            <header className="outer-container">
                <Header
                img={Logo}
                text="Reddit"
                />
            </header>
            <main className="outer-container">
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
                        <ul key={posts.data.created}>
                            <li className="container-little-box">
                                <h3 className="container-title"><a className="link-reddit" href={posts.data.url} target="_blank" rel="noreferrer">{posts.data.title}</a></h3>
                                <div className="lower-box">
                                    <Link className="link-subreddit" to={`subreddit/${posts.data.subreddit}`}><strong>{posts.data.subreddit_name_prefixed}</strong></Link>
                                    <p className="p-home">Comments {posts.data.num_comments} - Ups {posts.data.ups}</p>
                                </div>
                            </li>
                        </ul>
                    )})
                    }
            </>
            }
        </div>
            </main>
        </>
    );
};

export default Home;