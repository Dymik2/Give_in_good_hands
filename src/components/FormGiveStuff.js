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
import SeventhStep from "./formComponents/SeventhStep";
import EighthStep from "./formComponents/EighthStep";
import HeaderForm from './formComponents/HeaderForm';

const FormGiveStuff = () => {

    const [stepNumber, setStepNumber] = useState(0);


    return (
        <div className='formGiveStuffMain'>
            <div className='formGiveStuffHeader'>
                <HomeHeader />
                <HomeHeaderDown />
            </div>
            <HeaderForm />
            {stepNumber === 0 && <FirstStep setStepNumber={setStepNumber} />}
            {stepNumber === 1 && <SecondStep setStepNumber={setStepNumber} />}
            {stepNumber === 2 && <ThirdStep setStepNumber={setStepNumber} />}
            {stepNumber === 3 && <FourthStep setStepNumber={setStepNumber} />}
            {stepNumber === 4 && <FifthStep setStepNumber={setStepNumber} />}
            {stepNumber === 5 && <SixthStep setStepNumber={setStepNumber} />}
            {stepNumber === 6 && <SeventhStep setStepNumber={setStepNumber} />}
            {stepNumber === 7 && <EighthStep setStepNumber={setStepNumber} />}
            <Contact />
        </div>
    );
}

export default FormGiveStuff;