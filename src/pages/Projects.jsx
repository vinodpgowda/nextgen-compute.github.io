import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.container}>
            <h1>Research Projects</h1>
            <section className={styles.projectsGrid}>
                <article className={styles.card}>
                    <h3>Project 1</h3>
                    <p>Description of the first research project and its objectives.</p>
                </article>
                <article className={styles.card}>
                    <h3>Project 2</h3>
                    <p>Description of the second research project and its objectives.</p>
                </article>
                <article className={styles.card}>
                    <h3>Project 3</h3>
                    <p>Description of the third research project and its objectives.</p>
                </article>
            </section>
        </div>
    );
};

export default Projects;
