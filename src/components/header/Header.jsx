import React, { Component } from 'react';
import './header.css';
import CV from './CV';
import ME1 from '../../assets/me1.jpg';
import HeaderSocialMedia from './HeaderSocialMedias';

const Header = () => {
  return (
    <section className='header'>
      <div className="container header__container">
        <h5 className='fade-in'>Hello I'm</h5>
        <h1 className='fade-in'>Vinay Maggidi</h1>
        <h5 className="text-light fade-in">Fullstack Developer</h5>
        <CV />
        <HeaderSocialMedia />
        <div className="me fade-in">
          <img src={ME1} alt="" className='img-me' />
        </div>
        <a href="#contact" className='scroll__down fade-in'>
          Scroll Down
        </a>
      </div>
    </section>
  );
};

export default Header;

// const Header = () => {
//     return(
//         <section className='#header'>
//             <div className="container header__container">
//                 <h5>Hello I'm</h5>
//                 <h1>Vinay Maggidi</h1>
//                 <h5 className="text-light">Fullstack Developer</h5>
//                 <CV />
//                 <HeaderSocialMedia />

//                 <div className="me">
//                     <img src={ME1} alt="" className='img-me' />
//                 </div>
//                 <a href="#contact" className='scroll__down'>Scroll Down</a>
//             </div>
//         </section>
//     )
// }

// export default Header;