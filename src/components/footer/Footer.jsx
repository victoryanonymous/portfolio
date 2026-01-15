import React, { Component } from 'react';
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'


const Footer = () => {
    return(
        <footer>
            <a href="#" className='footer__logo'>VINAY</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socialMedia">
                <a href="https://www.linkedin.com/in/vinaymaggidi1333/" target='_blank'><BsLinkedin /></a>
                <a href="https://www.facebook.com/vinay.vinayrajaka.7" target='_blank'><FaFacebookF /></a>
                <a href="https://www.instagram.com/_vini_nani_/" target='_blank'><FiInstagram /></a>
                <a href="https://twitter.com/Vinayrajaka1" target='_blank'><IoLogoTwitter /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Vinay, All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer;