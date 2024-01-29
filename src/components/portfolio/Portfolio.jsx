import React, { Component } from 'react';
import './portfolio.css'
import IMG1 from '../../assets/img1.PNG'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.PNG'
import IMG5 from '../../assets/img5.PNG'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Bankist Application',
        github: 'https://github.com',
        demo: 'https://victoryanonymous.github.io/bankist/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Guess My Number',
        github: 'https://github.com',
        demo: 'https://victoryanonymous.github.io/guessMyNumber/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Nxt Trendz',
        github: 'https://github.com',
        demo: 'https://github.com/victoryanonymous/nxt-trendz'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Nirmal Wooden Toys',
        github: 'https://github.com/vinaymaggidi/NirmalToysMain',
        demo: 'https://nirmaltoys.onrender.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Todo List',
        github: 'https://github.com',
        demo: 'https://daily-todos-sz88.onrender.com/'
    },
    {
        id: 6,
        image: IMG2,
        title: 'Guess My Number',
        github: 'https://github.com',
        demo: 'https://victoryanonymous.github.io/guessMyNumber/'
    }
]

const Portfolio = () => {
    return(
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target="_blank">Github</a>
                                <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                            </div>
                        </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;