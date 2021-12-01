import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const activeStyle = {
        color: "#5817c0",
    }
    return (
        <div className="mb-5 sticky-top">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark box-shadow">
                <div class="container">
                    <Link class="navbar-brand fw-bold" to="/" style={{ color: "#c01717" }}>IBRAHIM</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" activeStyle={activeStyle} aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <HashLink class="nav-link" as={HashLink} activeStyle={activeStyle} aria-current="page" to="/#aboutMe">About Me</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink class="nav-link" activeStyle={activeStyle} to="/#skills">My Skills</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink class="nav-link" activeStyle={activeStyle} to="/#projects">Projects</HashLink>
                            </li>
                            <li class="nav-item">
                                <HashLink class="nav-link" activeStyle={activeStyle} to="/#contact">Contact</HashLink>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" activeStyle={activeStyle} to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;