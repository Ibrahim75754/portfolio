import React from 'react';
import './Home.css';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import AboutMe from './AboutMe/AboutMe';
import MySkill from './MySkill/MySkill';

const Home = () => {
    return (
        <div style={{ backgroundColor: "#212529", color: "white" }}>
            <Header></Header>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkill></MySkill>
            <Footer></Footer>
        </div>
    );
};

export default Home;