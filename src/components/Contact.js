import React, { useState } from 'react';
import '../scss/main.scss';
import { useForm } from "react-hook-form";
import instagram from "../assets/Instagram.png";
import facebook from "../assets/Facebook.png";
import decoration from "../assets/Decoration.svg";
import { API_URL } from "../api/constants";

const Contact = () => {
    const [showSend, setShowSend] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        fetch(`${API_URL}/tasks`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(r => r.json())
            .then(data => {
                setShowSend(true);
                console.log("Done");
            })
            .catch(err => console.log(err));
    };

    return (
        <div id="contact">
            <div className='mainContact'>
                <div className='contact'>
                    <h2>Skontaktuj się z nami</h2>
                    <img src={decoration} alt="" />
                    {showSend && <p className='sendMessage'>Wiadomość została wysłana. <br /> Wkrótce się z tobą skontaktujemy</p>}
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className='data'>
                            <label htmlFor="">Wpisz swoje imie
                                <input type="text" {...register("name", { required: true, minLength: 2 })} />
                                {errors.name?.type === 'required' && <p style={{ color: "red" }}>Imie jest wymagane</p>}
                                {errors.name?.type === 'minLength' && <p style={{ color: "red" }}>Minimalna długość to 2 znaki</p>}
                            </label>

                            <label htmlFor="">
                                Wpisz swoje email
                                <input type="text" {...register("email", { required: true, minLength: 8 })} />
                                {errors.email?.type === 'required' && <p style={{ color: "red" }}>Email jest wymagany</p>}
                                {errors.email?.type === 'minLength' && <p style={{ color: "red" }}>Minimalna długość to 8 znaki</p>}
                            </label>

                        </div>
                        <div className='comment'>
                            <label htmlFor="">
                                Wpisz swoją wiadomość
                                <input type="textarea"  {...register("comment", { required: true, minLength: 10 })} />
                                {errors.comment?.type === 'required' && <p style={{ color: "red" }}>Opis jest wymagany</p>}
                                {errors.comment?.type === 'minLength' && <p style={{ color: "red" }}>Minimalna długość to 10 znaków</p>}
                            </label>

                        </div>
                        <div className="submit"><button type="submit">Wyślij</button></div>

                    </form>
                </div>

            </div>
            <footer>
                <p>Copyright by Coderslab</p>
                <div>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </footer>
        </div>
    );
}

export default Contact;