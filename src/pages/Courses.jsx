import React from 'react';
import styles from './Courses.module.css';

const Courses = () => {
    return (
        <div className={styles.container}>
            <h1>Courses</h1>
            <section className={styles.coursesList}>
                <article className={styles.card}>
                    <h3>Course 1</h3>
                    <p>Course description and details</p>
                    <ul>
                        <li>Course Code: CSXXXX</li>
                        <li>Semester: Fall 2024</li>
                        <li>Instructor: Dr. [Name]</li>
                    </ul>
                </article>
                <article className={styles.card}>
                    <h3>Course 2</h3>
                    <p>Course description and details</p>
                    <ul>
                        <li>Course Code: CSXXXX</li>
                        <li>Semester: Spring 2025</li>
                        <li>Instructor: Dr. [Name]</li>
                    </ul>
                </article>
            </section>
        </div>
    );
};

export default Courses; 