import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="container">
            <div className="intro">
                <h1 className="ease-in">
                    Hey, I’m
                    <div className="name">
                        Tanishka Singh
                        <div className="wave-wrapper">
                            <div className="wave"></div>
                        </div>
                    </div>
                </h1>
                <p className="ease-in">I’m a software developer, tech enthusiast</p>
                <p className="ease-in">& full-stack web developer</p>
            </div>
            <div className="intro-link ease-in">
                <Link to="/work">
                    <ArrowForwardIcon className="icon" />
                    <p> see my projects</p>
                </Link>
                <Link to="/about">
                    <ArrowForwardIcon className="icon" />
                    <p> more about me</p>
                </Link>
            </div>
            <div class="noise"></div>
        </div>
    );
}

export default Home;
