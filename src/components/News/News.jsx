import React, { useState } from 'react';
import styles from './News.module.css';

const news = [
    { title: "January 2025", description: "Received the UTA CARES Grant for developing OER." },
    { title: "December 2024", description: "One paper got accepted in ACM TODAES." },
    { title: "June 2024", description: "One paper got accepted at ICCAD'24." },
    { title: "August 2023", description: "One paper got accepted at ICCD'23." },
    { title: "July 2023", description: "Three papers got accepted at ICCAD'23." },
    { title: "March 2023", description: "One paper got accepted in TCAD." },
    { title: "October 2022", description: "Our ICCAD'22 paper received the IEEE/ACM William J. McCalla ICCAD Best Paper Award Nomination." },
    { title: "September 2022", description: "One paper got accepted at ASP-DAC'23." },
    { title: "July 2022", description: "One paper got accepted at DAC'22." },
    { title: "November 2021", description: "One paper got accepted at DATE'22." },
    { title: "September 2021", description: "One paper got accepted at ASP-DAC'22." },
    { title: "July 2021", description: "One paper got accepted at MICRO'21." },
    { title: "July 2021", description: "One paper got accepted at ICCAD'21." }
];

const News = () => {
    const [visibleCount, setVisibleCount] = useState(10);

    const handleShowMore = () => {
        setVisibleCount(prev => prev + 10);
    };

    return (
        <div className={styles.newsContainer}>
            <h2 className={styles.newsTitle}>News</h2>
            <ul className={styles.newsList}>
                {news.slice(0, visibleCount).map((item, index) => (
                    <li key={index} className={styles.newsItem}>
                        <span className={styles.newsDate}>{item.title}</span>
                        <span className={styles.newsDesc}>{item.description}</span>
                    </li>
                ))}
            </ul>
            {visibleCount < news.length && (
                <button className={styles.showMoreBtn} onClick={handleShowMore}>
                    Older News
                </button>
            )}
        </div>
    );
};

export default News;
