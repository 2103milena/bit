import React from "react";
import Timer from "./timer";
import {Link} from "react-router-dom";


const Header = function () {
    return (
        <header>
            <h1>Blog</h1>
            <nav>
                <ul>
                    <li><Link to='/'>MainContent</Link></li>
                    <li><Link to='./about'>About</Link></li>
                </ul>
            </nav>
            <Timer interval="1000" />

        </header>
    );
};

export default Header;
