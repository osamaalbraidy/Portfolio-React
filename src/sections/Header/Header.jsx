import React, { useState, useEffect, useCallback } from "react";
import "./Header.css";
import { HeaderLink } from "../../components";

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
                    <a href="/">Osama AL Braidy</a>
                </h1>
                <span className="openList-button" onClick={() => setMenuActive(!menuActive)}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <span key={index} className={menuActive ? "none" : ""}></span>
                    ))}
                    <h1 className={menuActive ? "open" : "close"}>x</h1>
                </span>
                <ul className={`links ${menuActive ? "active" : "notActive"}`}>
                    <HeaderLink to='hero' onClick={turnOff}>home</HeaderLink>
                    <HeaderLink to='about' onClick={turnOff}>about</HeaderLink>
                    <HeaderLink to='services' onClick={turnOff}>services</HeaderLink>
                    <HeaderLink to='work' onClick={turnOff}>work</HeaderLink>
                    <HeaderLink to='contact' onClick={turnOff}>contact</HeaderLink>
                </ul>
            </div>
        </div>
    );
};

export default Header;
