import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/main.scss';


const HomeHeader = () => {
    return (
        <div className='homeHeaderMenu'>
            <Link className='linkHeader' to="/login">Login</Link>
            <Link className='linkHeader' to="/register">Register</Link>
        </div>
    );
}

export default HomeHeader;