import React from 'react';
import './Footer.css';

const gemini: number = 55;
const virgo: number = 45;


const Footer = () => {
    
    
    
    return (
        <>
        <p>This is the Footer.  I am years {gemini} old.</p>
        <p>This is {virgo}.</p>
        <h1>This is: {gemini + virgo}</h1>
        </>

    )
}

export default Footer;