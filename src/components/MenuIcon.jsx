import React from 'react';
import '../styles/Menu.css';

const MenuIcon = ({ clicked, noTransition }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="48"
        height="48"
        className={`icons-style ${clicked ? 'clicked' : ''} ${noTransition ? 'no-transition' : ''}`}
    >
        <title>Menu</title>
        <circle cx="12" cy="12" r="3" opacity="1"></circle>
        <circle cx="24" cy="12" r="3" opacity="1"></circle>
        <circle cx="36" cy="12" r="3" opacity="1"></circle>
        <circle cx="36" cy="24" r="3" opacity="1"></circle>
        <circle cx="36" cy="36" r="3" opacity="1"></circle>
        <circle cx="24" cy="36" r="3" opacity="1"></circle>
        <circle cx="12" cy="36" r="3" opacity="1"></circle>
        <circle cx="12" cy="24" r="3" opacity="1"></circle>
        <rect className="rect-horizontal" x="21" y="21" width="6px" height="6px" rx="3" ry="3" opacity="1"></rect>
        <rect className="rect-vertical" x="21" y="21" width="6px" height="6px" rx="3" ry="3" opacity="1"></rect>
    </svg>
);

export default MenuIcon;
