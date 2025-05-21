import React from 'react';
import styles from './People.module.css';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const people = [
    {
        photo: '/images/professor.png',
        name: 'Muhammed Rashed',
        title: 'Assistant Professor',
        about: 'Mr. Rashed is an assistant professor in the CSE department at the University of Texas at Arlington.',
        research: 'EDA for emerging computing paradigms, Artificial Intelligence Acceleration, and Sustainable Computing.',
        education: 'Ph.D. in Computer Engineering, UCF',
        email: 'muhammad.rashed@uta.edu',
        github: 'https://mrhrashed.github.io',
        linkedin: 'https://www.linkedin.com/in/muhammad-rashedul-haq-rashed/'
    },
    {
        photo: '/images/student1.jpg',
        name: 'John Smith',
        title: 'Ph.D. Student',
        about: 'John is a doctoral student focusing on machine learning for hardware acceleration.',
        research: 'Machine Learning, Hardware Acceleration',
        education: 'M.S. in Electrical Engineering, Stanford University',
        email: 'john.smith@example.com',
        github: 'https://github.com/johnsmith',
        linkedin: 'https://linkedin.com/in/johnsmith'
    },
    {
        photo: '/images/student2.jpg',
        name: 'Alice Lee',
        title: 'Research Assistant',
        about: 'Alice is a research assistant working on sustainable computing.',
        research: 'Sustainable Computing, EDA, AI Hardware',
        education: 'B.S. in Computer Science, UC Berkeley',
        email: 'alice.lee@example.com',
        github: 'https://github.com/alicel',
        linkedin: 'https://linkedin.com/in/alicel'
    }
];

// Separate professors and others
const professors = people.filter(p => p.title.toLowerCase().includes('professor'));
const others = people.filter(p => !p.title.toLowerCase().includes('professor'));

const People = () => {
    return (
        <div className={styles.container}>
            <h1>People</h1>
            {/* Professors row */}
            <section className={styles.peopleRow}>
                {professors.map((person, idx) => (
                    <article className={styles.personCard} key={idx}>
                        <img src={person.photo} alt={person.name} className={styles.photo} />
                        <h3 className={styles.name}>{person.name}</h3>
                        <p className={styles.title}>{person.title}</p>
                        <p className={styles.about}>{person.about}</p>
                        <div className={styles.section}><strong>Research Interests:</strong> {person.research}</div>
                        <div className={styles.section}><strong>Education:</strong> {person.education}</div>
                        <div className={styles.connections}>
                            <a href={`mailto:${person.email}`} className={styles.icon} title="Email"><MdEmail /></a>
                            <a href={person.github} target="_blank" rel="noopener noreferrer" className={styles.icon} title="GitHub"><FaGithub /></a>
                            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className={styles.icon} title="LinkedIn"><FaLinkedin /></a>
                        </div>
                    </article>
                ))}
            </section>
            {/* Students/Researchers row */}
            <section className={styles.peopleRow}>
                {others.map((person, idx) => (
                    <article className={styles.personCard} key={idx}>
                        <img src={person.photo} alt={person.name} className={styles.photo} />
                        <h3 className={styles.name}>{person.name}</h3>
                        <p className={styles.title}>{person.title}</p>
                        <p className={styles.about}>{person.about}</p>
                        <div className={styles.section}><strong>Research Interests:</strong> {person.research}</div>
                        <div className={styles.section}><strong>Education:</strong> {person.education}</div>
                        <div className={styles.connections}>
                            <a href={`mailto:${person.email}`} className={styles.icon} title="Email"><MdEmail /></a>
                            <a href={person.github} target="_blank" rel="noopener noreferrer" className={styles.icon} title="GitHub"><FaGithub /></a>
                            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className={styles.icon} title="LinkedIn"><FaLinkedin /></a>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default People;
