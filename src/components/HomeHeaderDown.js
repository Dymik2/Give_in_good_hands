import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


const HomeHeaderDown = () => {
    return (
        <div>
            <Link
                activeClass="active"
                to="homeStart"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Start</Link>
            <Link
                activeClass="active"
                to="homeThreeColumns"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >O co chodzi?</Link>
            <Link
                activeClass="active"
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >O nas</Link>
            <Link
                activeClass="active"
                to="organisation"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Organisation</Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Contact</Link>
        </div>
    );
}

export default HomeHeaderDown;