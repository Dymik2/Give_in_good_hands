import React from 'react';
import { Link } from 'react-router-dom';



const HomeHeader = () => {
    return (
        <div>
            HomeHeader
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    );
}

export default HomeHeader;