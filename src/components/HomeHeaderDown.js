import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkDom } from 'react-router-dom';


const HomeHeaderDown = () => {

    return (
        <div className='homeHeaderDown'>
            <LinkDom className='homeHeaderDownLink'
                to="/"
            >Start</LinkDom>
            <Link className='homeHeaderDownLink'
                activeClass="active"
                to="homeThreeColumns"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >O co chodzi?</Link>
            <Link className='homeHeaderDownLink'
                activeClass="active"
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >O nas</Link>
            <Link className='homeHeaderDownLink'
                activeClass="active"
                to="organisation"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Fundacje i Organizacje</Link>
            <Link className='homeHeaderDownLink'
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Kontakt</Link>
        </div>
    );
}

export default HomeHeaderDown;