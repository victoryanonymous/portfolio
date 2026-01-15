import React from 'react';
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>API Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>RESTful API Design & Development</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Node.js & Express.js Backend Services</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>API Documentation & Integration</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Third-party API Integration</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Microservices Architecture</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className="service__head">
                        <h3>Database & Backend</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Database Design & Management (MongoDB, MySQL)</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Query Optimization & Performance Tuning</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Server-side Logic & Business Logic Implementation</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Data Modeling & Schema Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Database Migration & Maintenance</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Backend Security & Best Practices</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className="service__head">
                        <h3>Backend Solutions</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Authentication & Authorization Systems</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Backend Architecture Design & Implementation</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Version Control & Collaboration using Git</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Code Review & Quality Assurance</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>Backend Deployment & DevOps</p>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
    )
}

export default Services;