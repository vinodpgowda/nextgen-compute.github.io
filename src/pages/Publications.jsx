import React from 'react';
import styles from './Publications.module.css';
import publications from '../data/publications';

const Publications = () => {
    // Group publications by year
    const publicationsByYear = publications.reduce((acc, pub) => {
        let year = null;
        let specialMention = null;

        // Match year followed by comma, parenthesis, open parenthesis, or end of string
        const yearMatch = pub.title.match(/\b(\d{4})\b(?=\s*(?:[),]|\(|$))/);
        if (yearMatch) {
            year = yearMatch[1];
        }

        // Extract special mention in parentheses at the end
        const specialMentionMatch = pub.title.match(/\(([^)]+)\)\s*$/);
        if (specialMentionMatch) {
            specialMention = specialMentionMatch[1].trim();
        }

        if (!year) {
            console.warn('Could not extract year from publication:', pub.title);
            return acc;
        }

        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push({
            ...pub,
            specialMention
        });
        return acc;
    }, {});

    // Sort years in descending order
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
                                        <p className={styles.title}>
                                            {pub.link ? (
                                                <a
                                                    href={pub.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.publicationLink}
                                                >
                                                    {pub.title}
                                                </a>
                                            ) : (
                                                pub.title
                                            )}
                                        </p>
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
