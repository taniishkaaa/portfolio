import React from 'react';
import '../styles/Menu.css';

const Menu = ({ menuOpen }) => {
    return (
        <div className={`menu ${menuOpen ? 'open' : 'close'}`}>
            <div className="menu-content">
                <div className="menu-items">
                    <nav>
                        <ol>
                            <li>
                                <div className="item-inner">
                                    <a href="/">
                                        <h1>Home</h1>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="item-inner">
                                    <a href="/work">
                                        <h1>Work</h1>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="item-inner">
                                    <a href="/about">
                                        <h1>About</h1>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className="item-inner">
                                    <a href="/contact">
                                        <h1>Contact</h1>
                                    </a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="menu-socials">
                    <ul>
                        <li>
                            <div className="item-inner"><a
                                href="https://github.com/taniishkaaa"
                                target="_blank" rel="noreferrer">↗ GitHub</a>
                            </div>
                        </li>
                        <li>
                            <div className="item-inner"><a
                                href="https://www.linkedin.com/in/tanishka-singh-a42571228/"
                                target="_blank" rel="noreferrer">↗ LinkedIn</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="noise"></div>
        </div>
    );
};

export default Menu;
