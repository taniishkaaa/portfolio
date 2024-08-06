import React, { useEffect } from "react";
import pfp from '../assets/images/pfp.jpg';

function About() {

    useEffect(() => {
        document.title = "Tanishka | About";
    }, []);

    return (
        <div className="scrollable-container">
            <div className="about">
                <div className="about-left">
                    <div className="about-title">
                        <h2>About</h2>
                    </div>
                    <hr className="separator" />
                    <div className="about-text">
                        <p>Hey, my name is Tanishka Singh. A girl trying to simply code her way in the technology industry.
                            I’m a software developer, web developer &amp; tech enthusiast from India.
                            I also enjoy competitive coding.
                            I’m very passionate about free and open-source software and I’m always curious
                            to learn more when it comes to new technologies and
                            creative coding.</p>
                    </div>
                    <div className="resume-link">
                        <a href="/tanishka_singh_resume.pdf" target="_blank"
                            rel="noreferrer">↓ Resume</a>
                    </div>
                </div>
                <div className="about-right">
                    <div className="profile-pic-wrapper">
                        <img className="profile-pic" src={pfp} alt="Portrait of Tanishka Singh" />
                    </div>
                </div>
            </div>
            <div class="noise"></div>
        </div>
    )
}

export default About;