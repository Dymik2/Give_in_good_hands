import React from 'react';
import '../scss/main.scss';
import instagram from "../assets/Instagram.png";
import facebook from "../assets/Facebook.png";
import decoration from "../assets/Decoration.svg";

const Contact = () => {
    return (
        <div id="contact">
            <div className='mainContact'>
                <div className='contact'>
                    <h2>Skontaktuj się z nami</h2>
                    <img src={decoration} alt="" />
                    <form action="">
                        <div className='data'>
                            <label htmlFor="">Wpisz swoje imie
                                <input type="text" />
                            </label>
                            <label htmlFor="">
                                Wpisz swoje email
                                <input type="text" />
                            </label>
                        </div>
                        <div className='comment'>
                            <label htmlFor="">
                                Wpisz swoją wiadomość
                                <input type="textarea" />
                            </label>
                        </div>
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