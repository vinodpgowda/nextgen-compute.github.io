import React from 'react';
import styles from './Home.module.css';
import Carousel from '../../components/Carousel/Carousel';
import projects from '../../data/projects';

// Map carousel images to project data, but use the new images
const carouselImageFiles = [
    '/images/carousel/CAD.png',
    '/images/carousel/Resilient.png',
    '/images/carousel/Hybrid1.png',
    '/images/carousel/Novel.png',
    '/images/carousel/AI.png',
];

const carouselImages = projects.slice(0, carouselImageFiles.length).map((project, idx) => ({
    url: carouselImageFiles[idx],
    title: project.title,
    description: project.briefDescription
}));

const Home = () => {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1>Welcome to NextGen Compute Lab</h1>
                <p>Advancing the frontiers of computing research and innovation</p>
            </section>

            <Carousel images={carouselImages} />

            <section className={styles.about}>
                <h2>About Our Lab</h2>
                <p>The NextGen Compute Lab at The University of Texas at Arlington is dedicated to pioneering research in next-generation computing technologies.</p>
            </section>
        </div>
    );
};

export default Home;
