import React from 'react';
import '../scss/main.scss';
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";
import people from "../assets/People.png";

const AboutUs = () => {
    return (
        <div id="aboutUs">
            <div>
                <h2>O nas</h2>
                <img src={decoration} alt="" className='decoration' />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam consequatur laudantium atque. Quam corporis animi blanditiis accusantium iure consequatur odit in saepe aliquid? </p>
                <div className='signature'>
                    <img src={signature} alt="" />
                </div>

            </div>
            <img src={people} alt="" />
        </div>
    );
}

export default AboutUs;