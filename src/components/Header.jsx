import React, { useState, useEffect } from "react";
import MenuIcon from "./MenuIcon.jsx";
import Menu from "./Menu.jsx";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState("dark");
    const [iconClicked, setIconClicked] = useState(false);
    const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
    const [noTransition, setNoTransition] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleMenu = () => {
        if (menuOpen) {
            setIconClicked(false);
            setMenuOpen(false);
            setTimeout(() => {
                setShouldRenderMenu(false);
                setNoTransition(false);
            }, 800);
        } else {
            setShouldRenderMenu(true);
            setMenuOpen(true);
            setIconClicked(true);
        }
        setNoTransition(false);
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
        setNoTransition(true);
    };

    const removeClass = () => {
        setNoTransition(false);
    }

    return (
        <header className="header">
            <div className="header-content">
                <div className="left-part">
                    <div className="logo">
                        <a href="/" className="logo-text">Tanishka.</a>
                    </div>
                </div>
                <div className="right-part">
                    <ul>
                        <li className="theme-switch">
                            <button
                                className="theme-switch-btn"
                                onClick={toggleTheme}
                            >
                                {theme === "light" ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#f0f4f8"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#f0f4f8"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="5" />
                                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                    </svg>
                                )}
                            </button>
                        </li>
                        <li>
                            <button
                                className="hamburger-btn"
                                onMouseEnter={removeClass}
                                onClick={toggleMenu}
                            >
                                <MenuIcon clicked={iconClicked} noTransition={noTransition} />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {shouldRenderMenu && <Menu menuOpen={menuOpen} />}
        </header>
    );
}

export default Header;
