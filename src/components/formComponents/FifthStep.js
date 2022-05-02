import React from 'react';
import { useSelector } from 'react-redux';
import tshirt from "../../assets/Icon-1.png"
import location from "../../assets/Icon-5.png"
import '../../scss/main.scss';

const FifthStep = ({ setStepNumber }) => {
    const { stuff } = useSelector(store => store);

    const backStep = () => {
        setStepNumber(prev => prev - 1);
        console.log("test");
    }

    const consent = () => {
        setStepNumber(prev => prev + 1);
    }

    return (
        <div className='fifthStep'>
            <div className='result'>
                <div className='resultFirstPart'>
                    <h3>Podsumowanie twojej darowizny</h3>
                    <div>
                        <h4>Odajesz:</h4>
                        <p><img src={tshirt} alt="" /> {stuff.quantity} worki,{stuff.stuff}, {stuff.people}</p>
                        <p><img src={location} alt="" /> dla lokacji {stuff.location}, {stuff.organization}</p>
                    </div>
                </div>
                <div className='resultData'>
                    <div>
                        <h4>Adress Odbioru</h4>
                        <p>Ulica: {stuff.adress[0]}</p>
                        <p>Miasto: {stuff.adress[1]}</p>
                        <p>Kod pocztowy: {stuff.adress[2]}</p>
                        <p>Numer Telefonu: {stuff.adress[3]}</p>
                    </div>
                    <div>
                        <h4>Termin Odbioru</h4>
                        <p>Data: {stuff.time[0]}</p>
                        <p>Godzina: {stuff.time[1]}</p>
                        <p>Uwagi dla kuriera: <br /> {stuff.time[2]}</p>
                    </div>
                </div>
            </div>
            <div className='buttonSection'>
                <button onClick={() => backStep()}>Wstecz</button>
                <button onClick={() => consent()}>Dalej</button>
            </div>
        </div>
    );
}

export default FifthStep;