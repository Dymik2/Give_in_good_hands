import React, { useState } from 'react';
import HomeHeader from './HomeHeader';
import HomeHeaderDown from './HomeHeaderDown';
import Contact from './Contact';
import '../scss/main.scss';
import FirstStep from "./formComponents/FirstStep";
import SecondStep from "./formComponents/SecondStep";
import ThirdStep from "./formComponents/ThirdStep";
import FourthStep from "./formComponents/FourthStep";
import FifthStep from "./formComponents/FifthStep";
import SixthStep from "./formComponents/SixthStep";
import HeaderForm from './formComponents/HeaderForm';
import backgrounImageForm from "../assets/Header-Form-Background.png";
const FormGiveStuff = () => {

    const [stepNumber, setStepNumber] = useState(0);


    return (
        <div className='formGiveStuffMain'>
            <div className='backgroundHeaderForm'>
                <img src={backgrounImageForm} alt="" className='imgBackgroundForm' />
                <div>
                    <div className='formGiveStuffHeader'>
                        <HomeHeader />
                        <HomeHeaderDown />
                    </div>
                    <HeaderForm />
                </div>
            </div>
            {stepNumber === 0 && <FirstStep setStepNumber={setStepNumber} />}
            {stepNumber === 1 && <SecondStep setStepNumber={setStepNumber} />}
            {stepNumber === 2 && <ThirdStep setStepNumber={setStepNumber} />}
            {stepNumber === 3 && <FourthStep setStepNumber={setStepNumber} />}
            {stepNumber === 4 && <FifthStep setStepNumber={setStepNumber} />}
            {stepNumber === 5 && <SixthStep setStepNumber={setStepNumber} />}
            <Contact />
        </div>
    );
}

export default FormGiveStuff;