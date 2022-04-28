import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../scss/main.scss';
import decoration from "../assets/Decoration.svg";
import HomeHeader from "./HomeHeader";
import HomeHeaderDown from './HomeHeaderDown';
import { useDispatch } from 'react-redux';
import { logUser } from '../Redux/actions/logActions'
import { useNavigate } from 'react-router-dom'

const Login = ({ loginUser }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        dispatch(logUser({ email: data.email, password: data.password }))
        loginUser();
        navigate("/");
    };

    return (
        <div className='loginContainer'>
            <div className='loginHeader'>
                <HomeHeader />
                <HomeHeaderDown />
            </div>
            <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
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
                </div>
                <div className='buttonsLogin'>
                    <Link className='linkLogin' to="/register">Załóż konto</Link>
                    <button className='linkLogin' type="submit">Zaloguj</button>
                </div>
            </form>
        </div>

    );
}

export default Login;