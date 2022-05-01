import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import '../../scss/main.scss';

const FourthStep = ({ setStepNumber }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const backStep = () => {
        setStepNumber(prev => prev - 1);
        console.log("test");
    }
    const onSubmit = async (data) => {

        console.log(data);
        setStepNumber(prev => prev + 1);
        //  navigate("/login");
    }
    return (
        <div className='fourthStep'>
            <div className='warnDiv'>
                <h3>Ważne!</h3>
                <p>
                    Uzupełnij szczegóły dotyczące twoich rzeczy. Dzięki temu będziemy wiedzieć, komu najlepiej je przekazać.
                </p>
            </div>
            <div className='fourthForm'>
                <h3>Podaj adres oraz termin dobioru rzeczy przez kuriera</h3>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='formInput'>
                        <div>
                            <h4>Adres odbioru:</h4>
                            <label htmlFor="">
                                <p>Ulica</p>
                                <input type="text" {...register("street", { required: true, minLength: 3 })} />
                            </label>
                            {errors.street?.type === 'required' && <p style={{ color: "red" }}>Ulica jest wymagana</p>}
                            <label htmlFor="">
                                <p>Miasto</p>
                                <input type="text" {...register("town", { required: true, minLength: 3 })} />
                            </label>
                            {errors.town?.type === 'required' && <p style={{ color: "red" }}>Miasto jest wymagane</p>}
                            <label htmlFor="">
                                <p>Kod Pocztowy</p>
                                <input type="text" {...register("ZIPcode", { required: true, minLength: 6 })} />
                            </label>
                            {errors.ZIPcode?.type === 'required' && <p style={{ color: "red" }}>Kod-pocztowy jest wymagany</p>}
                            <label htmlFor="">
                                <p>Numer telefonu</p>
                                <input type="text" {...register("telNumber", { required: true, minLength: 8 })} />
                            </label>
                            {errors.telNumber?.type === 'required' && <p style={{ color: "red" }}>Telefon jest wymagany</p>}
                        </div>
                        <div>
                            <h4>Termin odbioru:</h4>
                            <label htmlFor="">
                                <p>Data</p>
                                <input type="text" {...register("data", { required: true })} />
                            </label>
                            {errors.data?.type === 'required' && <p style={{ color: "red" }}>Data jest wymagana</p>}
                            <label htmlFor="">
                                <p>Godzina</p>
                                <input type="text" {...register("time", { required: true })} />
                            </label>
                            {errors.time?.type === 'required' && <p style={{ color: "red" }}>Godzina jest wymagana</p>}
                            <label htmlFor="">
                                <p>Uwagi dla kuriera</p>
                                <input type="textarea" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => backStep()}>Wstecz</button>
                        <button type="submit">Dalej</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default FourthStep;