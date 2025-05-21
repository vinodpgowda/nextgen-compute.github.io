import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.content}>
            <span>
                © {new Date().getFullYear()} NextGen Compute Lab, The University of Texas at Arlington
            </span>
        </div>
    </footer>
);

export default Footer;