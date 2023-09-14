import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from 'react-scroll'

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    const turnOff = () =>{
        if(menuActive) setMenuActive(false)
    }

    return (
        <div className="header">
            <div className="container navbar">
                <h1 className="logo">
                    <a href="/">Osama AL Braidy</a>
                </h1>
                <span className="openList-button" onClick={() => setMenuActive(!menuActive)}>
                    <span className={`${menuActive ? "none" : ""}`}></span>
                    <span className={`${menuActive ? "none" : ""}`}></span>
                    <span className={`${menuActive ? "none" : ""}`}></span>
                    <h1 className={`${menuActive ? "open" : "close"}`}>x</h1>
                </span>
                <ul className={`links ${menuActive ? "active" : ""}`}>
                    <li>
                        <Link to='hero' onClick={turnOff} activeClass="active-link" spy={true} smooth={true} offset={0} duration={300} >home</Link>
                    </li>
                    <li>
                        <Link to='about' onClick={turnOff} activeClass="active-link" spy={true} smooth={true} offset={0} duration={300}>about</Link>
                    </li>
                    <li>
                        <Link to='services' onClick={turnOff} activeClass="active-link" spy={true} smooth={true} offset={0} duration={300}>services</Link>
                    </li>
                    <li>
                        <Link to='work' onClick={turnOff} activeClass="active-link" spy={true} smooth={true} offset={0} duration={300}>work</Link>
                    </li>
                    <li>
                        <Link to='contact' onClick={turnOff} activeClass="active-link" spy={true} smooth={true} offset={0} duration={300}>contact</Link>
                    </li>
                </ul>
            </div>
            {scrollY > 200 && (
                <style jsx>
                    {`
                        .header {
                            background-color: black;
                        }
                    `}
                </style>
            )}
        </div>
    );
};

export default Header;
