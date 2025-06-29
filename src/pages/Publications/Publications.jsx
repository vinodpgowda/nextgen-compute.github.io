import React from 'react';
import styles from './Publications.module.css';
import publications from '../../data/publications';

const Publications = () => {
    // 1. Import all publications
    const publicationsByYear = publications.reduce((acc, pub) => {
        const year = pub.year;
        if (!acc[year]) acc[year] = [];
        acc[year].push(pub);
        return acc;
    }, {});

    // 2. Group them by year
    const sortedYears = Object.keys(publicationsByYear).sort((a, b) => b - a);

    return (
        <div className={styles.container}>
            <h1>Publications</h1>
            <div className={styles.publicationsList}>
                {sortedYears.map(year => (
                    <section key={year} className={styles.yearSection}>
                        <h2 className={styles.year}>{year}</h2>
                        <div className={styles.publications}>
                            {publicationsByYear[year].map((pub, index) => (
                                <article key={index} className={styles.publication}>
                                    <div className={styles.publicationContent}>
                                        <h3 className={styles.actualTitle}>
                                            {pub.link ? (
                                                <a
                                                    href={pub.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.publicationLink}
                                                >
                                                    {pub.actualTitle}
                                                </a>
                                            ) : (
                                                pub.actualTitle
                                            )}
                                        </h3>
                                        <p className={styles.citationDetails}>{pub.citationDetails}</p>
                                        {pub.specialMention && (
                                            <span className={styles.specialMention}>
                                                {pub.specialMention}
                                            </span>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Publications;
