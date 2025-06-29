import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <h1 className={styles.title}>NextGen Compute Lab</h1>
                    <h2 className={styles.subtitle}>The University of Texas at Arlington</h2>
                </div>
                <nav className={styles.nav}>
                    <Link to="/" className={styles.navLink}>Home</Link>
                    <Link to="/publications" className={styles.navLink}>Publications</Link>
                    <Link to="/projects" className={styles.navLink}>Projects</Link>
                    <Link to="/outreach" className={styles.navLink}>Outreach</Link>
                    <Link to="/people" className={styles.navLink}>People</Link>
                    {/* <Link to="/courses" className={styles.navLink}>Courses</Link> */}
                    <Link to="/contact" className={styles.navLink}>Contact</Link>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;