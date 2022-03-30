import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import {ReactComponent as Back} from "../../assets/back.svg";
import './Subreddit.css'
import Header from "../../components/header/Header";

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
    },[subredditId]);

    return (
        <>
        <header className="outer-container">
            {subreddit &&
            <Header
                text={subreddit.data.title}
                subtext="subreddit specifications"
            />
            }
        </header>
            <main className="outer-container">
                <div className="inner-container">
            {subreddit &&
            <>
                <section>
                <article key={subreddit.data.id}>
                    <div className="subreddit-page">
                        <h2>Title</h2>
                        <p className="p-subreddit">{subreddit.data.title}</p>
                    </div>
                    <div className="subreddit-page">
                        <h2>Description</h2>
                        <p className="p-subreddit">{subreddit.data.public_description}</p>
                    </div>
                    <div className="subreddit-page">
                        <h2>Number of subscribers</h2>
                        <p className="p-subreddit">{subreddit.data.subscribers}</p>
                    </div>
                </article>
                </section>
            </>
            }
            <div className="back-button">
                <Back /><Link className="link-back" to="/"><strong>Take me back</strong></Link>
            </div>
                </div>
            </main>
        </>
    );

};

export default Subreddit;