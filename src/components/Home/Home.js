import React from 'react';
import './Home.css';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import AboutMe from './AboutMe/AboutMe';
import MySkill from './MySkill/MySkill';
import Projects from './Projects/Projects';
import ContactMe from './ContactMe/ContactMe';

const Home = () => {
    return (
        <div style={{ backgroundColor: "#212529", color: "white" }}>
            <Header></Header>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkill></MySkill>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;