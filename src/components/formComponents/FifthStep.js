import React from 'react';
import tshirt from "../../assets/Icon-1.png"
import location from "../../assets/Icon-5.png"
import '../../scss/main.scss';

const FifthStep = ({ setStepNumber }) => {

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
                        <p><img src={tshirt} alt="" /> worki</p>
                        <p><img src={location} alt="" /> dla lokacji </p>
                    </div>
                </div>
                <div className='resultData'>
                    <div>
                        <h4>Adress Odbioru</h4>
                        <p>Ulica: </p>
                        <p>Miasto: </p>
                        <p>Kod pocztowy: </p>
                        <p>Numer Telefonu: </p>
                    </div>
                    <div>
                        <h4>Termin Odbioru</h4>
                        <p>Data: </p>
                        <p>Godzina:</p>
                        <p>Uwagi da kuriera: </p>
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