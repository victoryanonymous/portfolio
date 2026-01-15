import React from 'react';
import cv from '../../assets/Vinay_Maggidi_Backend_Developer.pdf';

const CV = () => {
    return (
        <div className="cv">
            <a href={cv} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CV;