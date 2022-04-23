import React from 'react';
import '../scss/main.scss';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import decoration from "../assets/Decoration.svg";
import HomeHeader from "./HomeHeader";
import HomeHeaderDown from './HomeHeaderDown';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className='registerContainer'>
            <div className='registerHeader'>
                <HomeHeader />
                <HomeHeaderDown />
            </div>
            <form className='registerForm' onSubmit={handleSubmit(onSubmit)}>
                <h2>Zaloguj się</h2>
                <img src={decoration} alt="" />
                <div className='inputs'>
                    <label htmlFor="" className='label'>
                        <p>Email</p>
                        <input type="text" {...register("email", { required: true, minLength: 8 })} />
                    </label>
                    {errors.email?.type === 'required' && <p style={{ color: "red" }}>Email jest wymagany</p>}
                    {errors.email?.type === 'minLength' && <p style={{ color: "red" }}>Minimalna długość to 8 znaki</p>}
                    <label htmlFor="" className='label'>
                        <p>Hasło</p>
                        <input type="password" {...register("password", { required: true, minLength: 3 })} />
                    </label>
                    {errors.password?.type === 'required' && <p style={{ color: "red" }}>Hasło jest wymagane</p>}
                    {errors.password?.type === 'minLength' && <p style={{ color: "red" }}>Minimalna długość to 3 znaki</p>}
                    <label htmlFor="" className='label'>
                        <p>Powtórz hasło</p>
                        <input type="password" {...register("passwordRepeat", { required: true, minLength: 3 })} />
                    </label>
                    {errors.passwordRepeat?.type === 'required' && <p style={{ color: "red" }}>Powtórz hasło</p>}
                </div>
                <div className='buttonsRegister'>
                    <Link className='linkRegister' to="/login">Zaloguj się</Link>
                    {/* <Link className='linkRegister' to="/login">Załóż konto</Link> */}
                    <button className='linkRegister' type="submit">Załóż konto</button>
                </div>
            </form>
        </div>

    );
}

export default Register;