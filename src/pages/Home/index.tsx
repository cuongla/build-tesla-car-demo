import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <>
            <video
                autoPlay
                muted
                loop
                className="home-background">
                <source
                    src={`${process.env.PUBLIC_URL}/video/background-video.mp4`}
                    type="video/mp4" />
            </video>
            <div className="home-content">
                <div className="home-wrapper">
                    <h1>Build Your Own Tesla Today</h1>
                    <Link to="/design">
                        <button className="home-wrapper__button">
                            Start Building
                    </button>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Home
