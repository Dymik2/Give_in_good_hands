import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editStuff } from '../../Redux/actions/stuffActions'
    ;
import { useSelector } from 'react-redux';
import '../../scss/main.scss';

const Third = ({ setStepNumber }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [location, setLocation] = useState();
    const [personHelp, setPersonHelp] = useState();
    const [organization, setOrganization] = useState();
    const { stuff } = useSelector(store => store);
    const dispatch = useDispatch();

    const handleNumberChange = (e) => {

        setLocation(e.target.value);
    };

    const handleButtonWhoHelp = (person, btn) => {
        const buttons = document.querySelectorAll(`[data-check="whoHelp"]`);
        buttons.forEach(el => {
            el.classList.remove("checkedbutton");
        })
        btn.classList.add("checkedbutton");
        setPersonHelp(person);
    }

    const backStep = () => {
        setStepNumber(prev => prev - 1);
    }

    const onSubmit = () => {
        if (location !== undefined && personHelp !== undefined && organization !== undefined) {
            setIsChecked(false);
            // console.log(`${location}, ${personHelp}, ${organization} `)
            dispatch(editStuff({ quantity: stuff.quantity, stuff: stuff.stuff, people: personHelp, location: location, organization: organization }))
            setStepNumber(prev => prev + 1);
        }
        else {
            setIsChecked(true);
        }
    }
    return (
        <div className='thirdStep'>
            <div className='warnDiv'>
                <h3>Ważne!</h3>
                <p>
                    Uzupełnij szczegóły dotyczące twoich rzeczy. Dzięki temu będziemy wiedzieć, komu najlepiej je przekazać.
                </p>
            </div>
            <div className='thirdForm'>
                <h3>Lokalizacja</h3>
                {isChecked && <p className='warning'>Uzupełnij formularz</p>}
                <label htmlFor="">
                    <select value={location} onChange={handleNumberChange}>
                        <option value="Wybierz">Wybierz</option>
                        <option value="Poznań">Poznań</option>
                        <option value="Kraków">Kraków</option>
                        <option value="Warszawa">Warszawa</option>
                        <option value="Wrocław">Wrocław</option>
                        <option value="Gdańsk">Gdańsk</option>
                    </select>
                </label>
                <label htmlFor="" ><p>Komu chcesz pomóc?</p>
                    <div className='buttonsWhoHelp'>
                        <div>
                            <button data-check="whoHelp" value="dzieciom" onClick={e => handleButtonWhoHelp(e.target.value, e.target)}>dzieciom</button>
                            <button data-check="whoHelp" value="samotnym matkom" onClick={e => handleButtonWhoHelp(e.target.value, e.target)}>samotnym matkom</button>
                            <button data-check="whoHelp" value="bezdomnym" onClick={e => handleButtonWhoHelp(e.target.value, e.target)}>bezdomnym</button>
                        </div>

                        <div>
                            <button data-check="whoHelp" value="niepełnosprawnym" onClick={e => handleButtonWhoHelp(e.target.value, e.target)}>niepełnosprawnym</button>
                            <button data-check="whoHelp" value="osobom starszym" onClick={e => handleButtonWhoHelp(e.target.value, e.target)}>osobom starszym</button>
                        </div>
                    </div>
                </label>
                <label htmlFor=""> <p>Wpisz nazwę konkretnej orgnizacji</p>
                    <input type="text" onChange={e => setOrganization(e.target.value)} /></label>
                <div>
                    <button onClick={() => backStep()}>Wstecz</button>
                    <button onClick={() => onSubmit()}>Dalej</button>
                </div>
            </div>
        </div>
    );
}

export default Third;
