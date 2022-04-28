import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from "../firebase-config";
import {
    signOut,
} from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import '../scss/main.scss';
import { useDispatch } from 'react-redux';
import { deleteLog } from '../Redux/actions/logActions'

const HomeHeader = () => {
    const { log } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const logout = async () => {
        dispatch(deleteLog({ email: log.email }))
        await signOut(auth);
        navigate("/loggedout");
    };

    return (
        <div className='homeHeaderMenu'>
            {log.length > 0 && <p>{log[0].email}</p>}
            {log.length > 0 && <button className='buttonHeader' onClick={logout}>Wyloguj</button>}
            {log.length < 1 && <Link className='linkHeader' to="/login">Zaloguj</Link>}
            {log.length < 1 && <Link className='linkHeader' to="/register">Zarejestruj</Link>}
        </div>
    );
}

export default HomeHeader;