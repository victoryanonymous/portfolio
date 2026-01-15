import React, { Component } from 'react';
import './index.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Services from './components/services/Services'
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <About />
            <Experience />
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}
 
export default App;