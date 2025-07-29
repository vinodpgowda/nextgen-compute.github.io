import React, { useEffect } from 'react';
import styles from './Outreach.module.css';

const Outreach = () => {

    useEffect(() => {
        document.title = "Outreach | NextGen Computing";
    }, []);

    // Only one outreach activity for now
    const outreachActivities = [
        {
            id: 1,
            title: 'Engineering Teen Academy Summer Camp',
            description: 'Educating pre-college students on next-generation AI-accelerator systems',
            image: '/images/outreach/Outreach1.jpg',
            date: 'June 2025',
        },
        {
            id: 2,
            title: 'UR2PHD program',
            description: 'Two undergraduate researchers and one graduate student from the NextGen Computing Lab participated in the UR2PHD program in Summer 25.',
            image: '/images/outreach/Outreach2.png',
            date: 'Summer 2025',
        },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Outreach & Activities</h1>
            <p className={styles.subtitle}>
                Our commitment to community engagement and knowledge sharing through various outreach programs and activities.
            </p>
            <section className={styles.gallery}>
                {outreachActivities.map((activity) => (
                    <article className={styles.card} key={activity.id}>
                        <img
                            src={activity.image}
                            alt={activity.title}
                            className={styles.cardImage}
                        />
                        <div className={styles.cardContent}>
                            <div className={styles.cardTitle}>{activity.title}</div>
                            <div className={styles.cardDate}>{activity.date}</div>
                            <div className={styles.cardDesc}>{activity.description}</div>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default Outreach; 