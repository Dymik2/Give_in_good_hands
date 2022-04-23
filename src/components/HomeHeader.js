import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../scss/main.scss';


const HomeHeader = () => {
    const { app } = useSelector(state => state);
    return (
        <div className='homeHeaderMenu'>
            {app.length && <p>{app[0].email}</p>}
            <Link className='linkHeader' to="/login">Zaloguj</Link>
            <Link className='linkHeader' to="/register">Zarejestruj</Link>
        </div>
    );
}

export default HomeHeader;