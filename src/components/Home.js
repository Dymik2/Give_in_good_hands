import React from 'react';
import AboutUs from './AboutUs';
import Contact from './Contact';
import HomeHeader from './HomeHeader';
import HomeStart from './HomeStart';
import HomeThreeColumns from './HomeThreeColumns';
import HowToDoIt from './HowToDoIt';
import Organisation from './Organisation';
import HomeHeaderDown from './HomeHeaderDown';
import heroimage from "../assets/heroimage.png";

const Home = () => {
    return (
        <div className='home'>
            <div className='mainSection'>
                <img src={heroimage} alt="tutaj coś powinno być" />
                <header className='header'>
                    <HomeHeader />
                    <HomeHeaderDown />
                    <HomeStart />
                </header>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <HomeThreeColumns />
            <HowToDoIt />
            <AboutUs />
            <Organisation />
            <Contact />
        </div>
    );
}

export default Home;