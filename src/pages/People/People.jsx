import React, { useEffect } from 'react';
import styles from './People.module.css';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const people = [
    {
        photo: '/images/people/Professor.png',
        name: 'Muhammed Rashed',
        title: 'Assistant Professor',
        about: 'Dr. Rashed is an assistant professor in the CSE department at the University of Texas at Arlington. His research focuses on electronic design automation for next-generation computing systems, artificial intelligence acceleration, and sustainable computing. His work has been published in top-tier venues such as DAC, MICRO, ICCAD, DATE, ASP-DAC, TCAD and TODAES. He has received numerous accolades, including the IEEE/ACM William J. McCalla Best Paper Award nomination at ICCAD 2022, the Publicity Paper regonition at DAC 2022, the Best Research Video Award at DAC 2021, the David T. and Jane M. Donaldson Memorial Graduate Scholarship in 2022, and the Dr. Alireza Seyedi Doctoral Research Innovation Scholarship in 2024.',
        //research: 'EDA for emerging computing paradigms, Artificial Intelligence Acceleration, and Sustainable Computing.',
        // education: 'Ph.D. in Computer Engineering, UCF',
        email: 'muhammad.rashed@uta.edu',
        github: 'https://mrhrashed.github.io',
        linkedin: 'https://www.linkedin.com/in/muhammad-rashedul-haq-rashed/'
    },
    {
        photo: '/images/people/Sifat2.jpg',
        name: 'Md Belal Uddin Sifat',
        title: 'Ph.D. Student',
        about: 'Sifat is a Ph.D. student working on computer-aided design for in-memory computing systems.',
        research: 'Computer-Aided Design, Content Addressable Memory',
        education: 'B.S. in Electrical and Electronics Engineering, CUET',
        email: 'mdbelaluddin.sifat@uta.edu',
        github: 'https://zippy-door-13a.notion.site/Md-Belal-Uddin-Sifat-20aae9624810806faebff1ab46e287c2   ',
        linkedin: 'https://www.linkedin.com/in/md-belal-uddin-sifat-699138281'
    },
    {
        photo: '/images/people/Arpita.jpg',
        name: 'Arpita Das',
        title: 'Ph.D. Student',
        about: 'Arpita Das is a Ph.D. student working on developing sustainable computing systems.',
        research: 'Sustainable Computing, AI Accelerators',
        education: 'B.S. in Computer Science and Engineering, KUET',
        email: 'axd4196@mavs.uta.edu',
        github: 'https://github.com/Arpita1607067',
        linkedin: 'https://www.linkedin.com/in/aprita-das-73505b1a2/'
    },
    {
        photo: '/images/people/Vinod.jpg',
        name: 'Vinod Kumar Puttamadegowda',
        title: 'Research Assistant',
        about: 'Vinod is a research assistant working on building and maintaining the NextGen Computing Lab website and assisting with in-memory computing research projects.',
        research: 'Software Engineering, Gen AI, In-Memory Computing',
        education: 'M.S. in Computer Science, UT Arlington',
        email: 'vxp8556@mavs.uta.edu',
        github: 'https://vinodpgowda.github.io/',
        linkedin: 'https://www.linkedin.com/in/vinodpgowda/'
    },
    {
        photo: '/images/people/sanvi.jpeg',
        name: 'Sanvi Porwal',
        title: 'High School Research Volunteer',
        about: 'Sanvi is a high school student at Jasper High School and is serving as a research volunteer for sustainable AI research.',
        research: 'Sustainable AI',
        education: 'Jasper High School',
        email: 'sanviporwal8@gmail.com',
        github: '',
        linkedin: ''
    }

];

// Past members data
const pastMembers = [

    {
        name: 'Shah Arifur Rahman Rhyme',
        timePeriod: 'Fall 2024 - Summer 2025',
        github: 'https://github.com/shahRhyme007',
        linkedin: 'https://www.linkedin.com/in/shah-rhyme'
    },
    {
        name: 'Angel Singh Shrestha',
        timePeriod: 'Fall 2024 - Summer 2025',
        github: 'https://github.com/ngelw',
        linkedin: 'https://www.linkedin.com/in/angelshrestha/'
    },
    {
        name: 'Michelle Uslu',
        timePeriod: 'Fall 2024 - Summer 2025',
        github: '',
        linkedin: ''
    },
    {
        name: 'Rajat Kumar Kulkarni',
        timePeriod: 'Fall 2024 - Summer 2025',
        github: 'https://github.com/Rajatkul1998',
        linkedin: 'https://www.linkedin.com/in/rajat-kulkarni-78623116a/'
    }
    // Add more past members as needed
];

// Separate professors and others
const professors = people.filter(p => p.title.toLowerCase().includes('professor'));
const others = people.filter(p => !p.title.toLowerCase().includes('professor'));

const People = () => {

    useEffect(() => {
        document.title = "People | NextGen Computing";
    }, []);

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
                        {!person.title.toLowerCase().includes('professor') && (
                            <>
                                <div className={styles.section}>
                                    <strong>Research Interests:</strong> {person.research}
                                </div>
                                <div className={styles.section}>
                                    <strong>Education:</strong> {person.education}
                                </div>
                            </>
                        )}
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

            {/* Past Members section */}
            <section className={styles.pastMembersSection}>
                <h2>Past Members</h2>
                <div className={styles.pastMembersList}>
                    {pastMembers.map((member, idx) => (
                        <div className={styles.pastMemberItem} key={idx}>
                            <span className={styles.pastMemberName}>{member.name}</span>
                            <span className={styles.pastMemberPeriod}>({member.timePeriod})</span>
                            <div className={styles.pastMemberLinks}>
                                {member.github && (
                                    <a href={member.github} target="_blank" rel="noopener noreferrer" className={styles.icon} title="Link 1">
                                        <FaGithub />
                                    </a>
                                )}
                                {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.icon} title="Link 2">
                                        <FaLinkedin />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default People;
