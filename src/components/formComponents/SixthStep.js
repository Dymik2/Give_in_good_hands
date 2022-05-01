import React from 'react';
import '../../scss/main.scss';
import decoration from "../../assets/Decoration.svg";

const SixthStep = () => {
    return (
        <div className='finish'>
            <div>
                <p>Dziękujemy za przesłanie formularza.
                    <br />  Na maila prześlemy wszelkie
                    <br /> informacje o odbiorze</p>
                <img src={decoration} alt="" />
            </div>
        </div>
    );
}

export default SixthStep;