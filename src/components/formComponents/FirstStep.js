import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import '../../scss/main.scss';

const FirstStep = ({ setStepNumber }) => {
    const [chooseStuff, setChooseStuff] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    const {
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {
        if (chooseStuff.length === 0) {
            setIsChecked(true);
        }
        else {
            setIsChecked(false);
            setStepNumber(prev => prev + 1);
        }
        console.log(chooseStuff);
    };

    const handleChooseStuff = (stuff, isChecked) => {
        if (isChecked) {
            setChooseStuff(prev => [...prev, stuff]);
        }
        else {
            setChooseStuff(chooseStuff.filter(
                el => el !== stuff
            ))
        }
    }

    return (
        <div className='firstStep'>
            <div className='warnDiv'>
                <h3>Ważne!</h3>
                <p>
                    Uzupełnij szczegóły dotyczące twoich rzeczy. Dzięki temu będziemy wiedzieć, komu najlepiej je przekazać.
                </p>
            </div>
            <div className='firstForm'>
                <h3>Zaznacz co chcesz oddać:</h3>
                {isChecked && <p style={{ color: "red" }}>Zaznacz przynajmniej jedną opcję</p>}
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label htmlFor="">
                        <p>Ubrania, które nadają się do ponownego użycia</p>
                        <input className='input' type="checkbox" value="Ubrania, które nadają się do ponownego użycia" onChange={e => handleChooseStuff(e.target.value, e.target.checked)} />
                    </label>
                    <label htmlFor="">
                        <p>Ubrania, do wyrzucenia</p>
                        <input type="checkbox" value="Ubrania, do wyrzucenia" onChange={e => handleChooseStuff(e.target.value, e.target.checked)} />
                    </label>
                    <label htmlFor="">
                        <p>zabawki</p>
                        <input type="checkbox" value="zabawki" onChange={e => handleChooseStuff(e.target.value, e.target.checked)} />
                    </label>
                    <label htmlFor="">
                        <p>ksiażki</p>
                        <input type="checkbox" value="ksiażki" onChange={e => handleChooseStuff(e.target.value, e.target.checked)} />
                    </label>
                    <label htmlFor="">
                        <p>inne</p>
                        <input type="checkbox" value="inne" onChange={e => handleChooseStuff(e.target.value, e.target.checked)} />
                    </label>
                    <button type="submit">Dalej</button>
                </form>
            </div>
        </div>
    );
}

export default FirstStep;