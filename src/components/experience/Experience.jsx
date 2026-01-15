import React from 'react';
import './experience.css'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import IMG1 from '../../assets/img1.PNG'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.PNG'
import IMG5 from '../../assets/img5.PNG'

// Work Experience
const workExperience = [
    {
        id: 1,
        company: "LayerZeroX Tech Labs Pvt. Ltd.",
        role: "Backend Developer",
        duration: "Feb 2024 – Present (1 yr 8 mo)",
        description: [
            "Architected and maintained highly scalable backend systems leveraging Node.js and MongoDB, ensuring optimal performance and reliability for high-traffic applications while implementing efficient data models and query optimization strategies.",
            "Engineered robust deployment infrastructure using Nginx and Caddy as reverse proxies, integrated PM2 for advanced process management and load balancing, resulting in improved system uptime and seamless horizontal scaling capabilities.",
            "Designed comprehensive RESTful APIs with full documentation using Swagger, implemented rigorous testing frameworks with Mocha and Chai to ensure code quality, reliability, and maintainability across all backend services.",
            "Contributed significantly to blockchain development initiatives by building and integrating smart contract modules using Solidity, while creating JavaScript-based interfaces for seamless interaction between blockchain networks and traditional web applications.",
            "Developed and maintained critical backend services for OmniFlix ecosystem including Studio, Market, and TV platforms, enabling creators to publish, monetize, and distribute content across multiple channels with robust API integrations.",
            "Implemented real-time video streaming capabilities with interactive engagement features, integrated media node infrastructure to support distributed content delivery, and built WebSocket-based systems for live user interactions and notifications.",
            "Created comprehensive creator management tools that empower content creators to efficiently manage livestreams, schedule broadcasts, and handle interactive NFT collections, streamlining the content creation workflow and enhancing user experience.",
            "Developed and deployed multiple NFT smart contract implementations including OEM (OmniFlix Edition Minting), MMOEM (Multi-Media OmniFlix Edition Minting), and Classic Minter contracts, enabling seamless NFT creation, minting, and marketplace transactions on the blockchain.",
            "Built a sophisticated data indexing layer that processes and structures NFT metadata, transaction logs, and analytics data from blockchain events, enabling fast queries, comprehensive analytics dashboards, and real-time insights for platform users.",
            "Leading the backend development efforts for Flix.fun, a cutting-edge decentralized streaming platform, architecting the Creator HomePage system with widget management and comprehensive content management capabilities, enabling creators to customize their presence and manage their digital assets effectively."
        ],
        technologies: ["Node.js", "Express.js", "MongoDB", "Nginx", "Caddy", "REST APIs", "Swagger", "PM2", "Mocha", "Chai", "JavaScript", "Solidity", "Blockchain"]
    },
    {
        id: 2,
        company: "RGUKT Basar",
        role: "Training and Placement Student Coordinator",
        duration: "Dec 2023 – Sep 2024 (10 mos)",
        description: [
            "Facilitated placement drives and coordinated training initiatives",
            "Acted as liaison between students, faculty, and companies for smooth operations"
        ],
        technologies: ["Coordination", "Communication", "Management"]
    }
];

// College Projects (from portfolio)
const collegeProjects = [
    {
        id: 1,
        title: 'Nirmal Wooden Toys',
        image: IMG4,
        description: 'E-commerce platform for wooden toys with full CRUD operations',
        technologies: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/vinaymaggidi/NirmalToysMain',
        demo: 'https://nirmaltoys.onrender.com',
        period: 'College Project'
    },
    {
        id: 2,
        title: 'Nxt Trendz',
        image: IMG3,
        description: 'E-commerce application with modern UI/UX',
        technologies: ['React', 'JavaScript', 'CSS'],
        github: 'https://github.com/victoryanonymous/nxt-trendz',
        demo: 'https://github.com/victoryanonymous/nxt-trendz',
        period: 'College Project'
    },
    {
        id: 3,
        title: 'Todo List',
        image: IMG5,
        description: 'Task management application with real-time updates',
        technologies: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com',
        demo: 'https://daily-todos-sz88.onrender.com/',
        period: 'College Project'
    },
    {
        id: 4,
        title: 'Bankist Application',
        image: IMG1,
        description: 'Banking application with transaction management',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com',
        demo: 'https://victoryanonymous.github.io/bankist/',
        period: 'College Project'
    },
    {
        id: 5,
        title: 'Guess My Number',
        image: IMG2,
        description: 'Interactive number guessing game',
        technologies: ['JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com',
        demo: 'https://victoryanonymous.github.io/guessMyNumber/',
        period: 'College Project'
    }
];

const Experience = () => {
    return(
        <section id='experience'>
            <h5>My Journey</h5>
            <h2>Experience & Projects</h2>

            <div className="container experience__container">
                {/* Work Experience Section */}
                <div className="experience__work">
                    <div className="experience__header">
                        <FaBriefcase className="experience__icon" />
                        <h3>Work Experience</h3>
                    </div>
                    
                    {workExperience.map((exp) => (
                        <div key={exp.id} className="experience__card">
                            <div className="experience__card-header">
                                <h4>{exp.role}</h4>
                                <span className="experience__company">{exp.company}</span>
                                <small className="experience__duration">{exp.duration}</small>
                            </div>
                            <ul className="experience__description">
                                {exp.description.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                            <div className="experience__tech">
                                {exp.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* College Projects Section */}
                <div className="experience__projects">
                    <div className="experience__header">
                        <FaGraduationCap className="experience__icon" />
                        <h3>College Projects</h3>
                    </div>
                    
                    <div className="projects__grid">
                        {collegeProjects.map((project) => (
                            <article key={project.id} className="project__card">
                                <div className="project__image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project__overlay">
                                        <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                            Live Demo
                                        </a>
                                        <a href={project.github} className="btn" target="_blank" rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                                <div className="project__content">
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                    <small className="project__period">{project.period}</small>
                                    <div className="project__tech">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag-small">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;