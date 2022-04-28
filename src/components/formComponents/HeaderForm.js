import React from 'react';
import decoration from "../../assets/Decoration.svg";

const HeaderForm = () => {
    return (
        <div className='mainDivForm'>
            <div className='leftContainer'>
                <h2>Oddaj rzeczy, których już nie chcesz
                    <br />
                    <span>Potrzebującym</span>
                </h2>
                <img src={decoration} alt="" />
                <p>Wystarczą 4 proste kroki</p>
                <div className='containerRotateDiv'>
                    <div className='rotateDiv'> <p>Wybierz rzecz</p> </div>
                    <div className='rotateDiv'> <p>Spakuj je w worku </p> </div>
                    <div className='rotateDiv'> <p> Wybierz fundacje </p> </div>
                    <div className='rotateDiv'><p>Zamów kuriera </p></div>
                </div>
            </div>
        </div>
    );
}

export default HeaderForm;