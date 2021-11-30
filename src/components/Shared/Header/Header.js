import React from 'react';

const Header = () => {
    const activeStyle = {
        color: "#5817c0",
    }
    return (
        <div className="mb-5 sticky-top">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark box-shadow">
                <div class="container">
                    <a class="navbar-brand fw-bold" href="/" style={{ color: "#c01717" }}>IBRAHIM</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" activeStyle={activeStyle} aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" activeStyle={activeStyle} aria-current="page" href="#aboutMe">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" activeStyle={activeStyle} href="#skills">My Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" activeStyle={activeStyle} href="#projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" activeStyle={activeStyle} href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;