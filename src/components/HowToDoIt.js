import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/main.scss';
import decoration from "../assets/Decoration.svg";
import tshirt from "../assets/Icon-1.png";
import bag from "../assets/Icon-2.png";
import loupe from "../assets/Icon-3.png";
import recycle from "../assets/Icon-4.png";

const HowToDoIt = () => {
    return (
        <div className='howToDoIt'>
            <div className='title'>
                <h2>Wystarczą 4 proste kroki</h2>
                <img src={decoration}
                    alt="coś poszło nie tak" />
            </div>
            <div className='steps'>
                <div className='containerSteps'>
                    <div>
                        <img src={tshirt} alt="" />
                        <h4>Wybierz rzeczy</h4>
                        <h5></h5>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div>
                        <img src={bag} alt="" />
                        <h4>Spakuj je</h4>
                        <h5></h5>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div>
                        <img src={loupe} alt="" />
                        <h4>Zdecyduj komu chcesz pomóc</h4>
                        <h5></h5>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div>
                        <img src={recycle} alt="" />
                        <h4>Zamów kuriera</h4>
                        <h5></h5>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
            </div>
            <Link className='link' to="/login">Oddaj rzeczy</Link>
        </div>
    );
}

export default HowToDoIt;