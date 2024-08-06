import React, { useState, useEffect } from "react";
import work1 from '../assets/images/work-1.png';
import work2 from '../assets/images/work-2.png';
import work3 from '../assets/images/work-3.png';
import work4 from '../assets/images/work-4.png';
import work5 from '../assets/images/work-5.png';

function Work() {
    useEffect(() => {
        document.title = "Tanishka | Work";
    }, []);

    const [imageSrc, setImageSrc] = useState("");
    const [imageKey, setImageKey] = useState(0);
    const [zoomClass, setZoomClass] = useState("");

    const handleMouseEnter = (src) => {
        setImageSrc(src);
        setImageKey(prevKey => prevKey + 1);
        setZoomClass("zoom-in");
    };

    const handleMouseLeave = () => {
        setZoomClass("zoom-out");
        setTimeout(() => {
            setImageSrc("");
        }, 100);
    };

    return (
        <div className="scrollable-container">
            <div className="projects">
                <div className="projects-left">
                    <div className="project-img-wrapper">
                        {imageSrc && (
                            <img
                                key={imageKey}
                                className={`projects-image ${zoomClass}`}
                                src={imageSrc}
                                alt=""
                            />
                        )}
                    </div>
                </div>
                <div className="projects-right">
                    <div className="work">
                        <h2 className="work-title">Work</h2>
                        <h5 className="elements-number">5</h5>
                    </div>
                    <hr className="work-separator" />
                    <ul>
                        <li><a
                            href="https://github.com/taniishkaaa/Book-Blog" target="_blank" rel="noreferrer">
                            <div
                                className="project-item"
                                onMouseEnter={() => handleMouseEnter(work1)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="projects-row-left">
                                    <h4 className="project-selected">→</h4>
                                    <h4 className="projects-title">Book-Blog</h4>
                                </div>
                                <div className="projects-row-right">
                                    <p className="projects-category">MERN</p>
                                </div>
                            </div>
                        </a></li>
                        <li><a
                            href="https://github.com/taniishkaaa/keeper" target="_blank" rel="noreferrer">
                            <div
                                className="project-item"
                                onMouseEnter={() => handleMouseEnter(work2)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="projects-row-left">
                                    <h4 className="project-selected">→</h4>
                                    <h4 className="projects-title">Keeper</h4>
                                </div>
                                <div className="projects-row-right">
                                    <p className="projects-category">ReactJS</p>
                                </div>
                            </div>
                        </a></li>
                        <li><a
                            href="https://github.com/taniishkaaa/travel-tracker" target="_blank" rel="noreferrer">
                            <div
                                className="project-item"
                                onMouseEnter={() => handleMouseEnter(work3)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="projects-row-left">
                                    <h4 className="project-selected">→</h4>
                                    <h4 className="projects-title">Family Travel Tracker</h4>
                                </div>
                                <div className="projects-row-right">
                                    <p className="projects-category">NodeJS</p>
                                </div>
                            </div>
                        </a></li>
                        <li><a
                            href="https://github.com/taniishkaaa/secrets" target="_blank" rel="noreferrer">
                            <div
                                className="project-item"
                                onMouseEnter={() => handleMouseEnter(work5)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="projects-row-left">
                                    <h4 className="project-selected">→</h4>
                                    <h4 className="projects-title">Secrets</h4>
                                </div>
                                <div className="projects-row-right">
                                    <p className="projects-category">NodeJS</p>
                                </div>
                            </div>
                        </a></li>
                        <li><a
                            href="https://github.com/taniishkaaa/simon-game" target="_blank" rel="noreferrer">
                            <div
                                className="project-item"
                                onMouseEnter={() => handleMouseEnter(work4)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="projects-row-left">
                                    <h4 className="project-selected">→</h4>
                                    <h4 className="projects-title">Simon-Game</h4>
                                </div>
                                <div className="projects-row-right">
                                    <p className="projects-category">JS</p>
                                </div>
                            </div>
                        </a></li>
                    </ul>
                </div>
            </div>
            <div className="noise"></div>
        </div>
    );
}

export default Work;
