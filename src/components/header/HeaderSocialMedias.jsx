import React, { Component } from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocialMedia = () => {
    return (
        <div className="header__socialmedia">
            <a href="https://www.linkedin.com/in/vinaymaggidi1333/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/victoryanonymous/" target='_blank'><FaGithub /></a>
        </div>
    )
}

export default HeaderSocialMedia;