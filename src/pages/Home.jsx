import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1>Welcome to NextGen Compute Lab</h1>
                <p>Advancing the frontiers of computing research and innovation</p>
            </section>
            <section className={styles.about}>
                <h2>About Our Lab</h2>
                <p>The NextGen Compute Lab at The University of Texas at Arlington is dedicated to pioneering research in next-generation computing technologies.</p>
            </section>
        </div>
    );
};

export default Home;
