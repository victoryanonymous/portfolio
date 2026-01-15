import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocialMedia = () => {
    return (
        <div className="header__socialmedia">
            <a href="https://www.linkedin.com/in/vinaymaggidi1333/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/victoryanonymous/" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
        </div>
    )
}

export default HeaderSocialMedia;