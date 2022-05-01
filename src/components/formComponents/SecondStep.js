import React, { useState } from 'react';
import '../../scss/main.scss';

const SecondStep = ({ setStepNumber }) => {
    //const [isChecked, setIsChecked] = useState(true);
    const [numberBag, setNumberBag] = useState();

    const handleNumberChange = (e) => {
        setNumberBag(e.target.value);
    };

    const backStep = () => {
        setStepNumber(prev => prev - 1);
        console.log("test");
    }

    const onSubmit = () => {
        if (parseInt(numberBag) >= 1) {
            // setIsChecked(false);
            setStepNumber(prev => prev + 1);
        }
        else {
            //  setIsChecked(true);
        }
        console.log("test2");
    }

    return (
        <div className='secondStep'>
            <div className='warnDiv'>
                <h3>Ważne!</h3>
                <p>
                    Uzupełnij szczegóły doyczące twoich rzeczy. Dzięki temu będziemy wiedzieć, komu najlepiej je przekazać.
                </p>
            </div>
            <div className='secondForm'>
                <h3>Podaj w ile worków chcesz się spakować:</h3>
                {/* {isChecked && <p>Zanzacz przynajmniej jedną opcję</p>} */}
                <label htmlFor="">
                    <p>Liczba 60l worków: </p>
                    <select value={numberBag} onChange={handleNumberChange}>
                        <option value="Wybierz">Wybierz</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <div>
                    <button onClick={() => backStep()}>Wstecz</button>
                    <button onClick={() => onSubmit()}>Dalej</button>
                </div>
            </div>
        </div>
    );
}

export default SecondStep;