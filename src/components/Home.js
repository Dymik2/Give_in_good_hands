import React from 'react';
import AboutUs from './AboutUs';
import Contact from './Contact';
import HomeHeader from './HomeHeader';
import HomeStart from './HomeStart';
import HomeThreeColumns from './HomeThreeColumns';
import HowToDoIt from './HowToDoIt';
import Organisation from './Organisation';
import HomeHeaderDown from './HomeHeaderDown';

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <HomeHeaderDown />
            <HomeStart />
            <HomeThreeColumns />
            <HowToDoIt />
            <AboutUs />
            <Organisation />
            <Contact />
        </div>
    );
}

export default Home;