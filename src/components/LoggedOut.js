import React from 'react';
import { Link } from 'react-router-dom';
import decoration from "../assets/Decoration.svg";
import HomeHeader from "./HomeHeader";
import HomeHeaderDown from './HomeHeaderDown';
import '../scss/main.scss';

const LoggedOut = () => {
    return (
        <div className="loggedOutPage">
            <div className='loginHeader'>
                <HomeHeader />
                <HomeHeaderDown />
            </div>
            <div className='containLogout'>
                <h2>Wylogowano</h2>
                <img src={decoration} alt="" />
                <Link to="/" className='logToMainPage'>Strona Główna</Link>
            </div>
        </div>);
}

export default LoggedOut;