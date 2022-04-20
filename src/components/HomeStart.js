import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/main.scss';
import decoration from "../assets/Decoration.svg";

const HomeStart = () => {
    return (
        <div id="homeStart">
            <div className='title'>
                <h2>Zacznij Pomagać!</h2>
                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img src={decoration}
                    alt="coś poszło nie tak" />
            </div>
            <div className='links'>
                <Link className='link' to="/login">Oddaj rzeczy</Link>
                <Link className='link' to="/login">Zorganizuj zbiórkę</Link>
            </div>
        </div>
    );
}

export default HomeStart;