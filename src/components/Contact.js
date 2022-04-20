import React from 'react';
import '../scss/main.scss';
import instagram from "../assets/Instagram.png";
import facebook from "../assets/Facebook.png";
import decoration from "../assets/Decoration.svg";

const Contact = () => {
    return (
        <div id="contact">
            <div className='mainContact'>
                <h2>Skontaktuj się z nami</h2>
                <img src={decoration} alt="" />
                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </form>
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