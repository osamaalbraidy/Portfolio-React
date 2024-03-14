import React, { useState, useEffect, useCallback } from "react";
import "./Header.css";
import { HeaderLink } from "../../components";
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const turnOff = () => {
        if (menuActive) setMenuActive(false);
    };

    const headerClassName = scrollY > 200 ? "header black-bg" : "header";

    return (
        <div className={headerClassName}>
            <div className="container navbar">
                <h1 className="logo">
                    <Link to="/Portfolio-React/">Osama AL Braidy</Link>
                </h1>
                <span className="openList-button" onClick={() => setMenuActive(!menuActive)}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <span key={index} className={menuActive ? "none" : ""}></span>
                    ))}
                    <h1 className={menuActive ? "open" : "close"}>x</h1>
                </span>
                <ul className={`links ${menuActive ? "active" : "notActive"}`}>
                    <HeaderLink to='hero' onClick={turnOff}>
                        <Link to='/Portfolio-React/' style={{ padding: 0 }}>
                            home
                        </Link>
                    </HeaderLink>
                    <HeaderLink to='about' onClick={turnOff}>
                        <Link to='/Portfolio-React/' style={{ padding: 0 }}>
                            about
                        </Link>
                    </HeaderLink>
                    <HeaderLink to='services' onClick={turnOff}>
                        <Link to='/Portfolio-React/' style={{ padding: 0 }}>
                            services
                        </Link>
                    </HeaderLink>
                    <HeaderLink to='work' onClick={turnOff}>
                        <Link to='/Portfolio-React/' style={{ padding: 0 }}>
                            work
                        </Link>
                    </HeaderLink>
                    <HeaderLink to='contact' onClick={turnOff}>
                        <Link to='/Portfolio-React/' style={{ padding: 0 }}>
                            contact
                        </Link>
                    </HeaderLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;
