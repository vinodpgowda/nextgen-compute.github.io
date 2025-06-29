import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import './Carousel.css';
import projects from '../../data/projects';
import styles from '../../pages/Projects/Projects.module.css';

const VISIBLE_COUNT = 3;

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const numImages = images.length;

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? numImages - VISIBLE_COUNT : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= numImages - VISIBLE_COUNT ? 0 : prevIndex + 1
        );
    };

    const getVisibleImages = () => {
        const visibleImages = [];
        for (let i = 0; i < VISIBLE_COUNT; i++) {
            const index = (currentIndex + i) % numImages;
            visibleImages.push({ ...images[index], originalIndex: index });
        }
        return visibleImages;
    };

    // Find the full project data by title (since carousel images are derived from projects)
    const handleCardClick = (slide) => {
        const project = projects.find(p => p.title === slide.title);
        if (project) {
            setSelectedProject(project);
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <Box className="carousel-container">
            <IconButton
                className="nav-button left"
                onClick={goToPrevious}
            >
                <ChevronLeft />
            </IconButton>

            <Box className="slides-container manual">
                {getVisibleImages().map((slide, idx) => (
                    <Box key={slide.originalIndex} className="slide" onClick={() => handleCardClick(slide)}>
                        <Box className="slide-image-wrapper">
                            <Box
                                className="slide-image"
                                sx={{ backgroundImage: `url(${slide.url})` }}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>

            <IconButton
                className="nav-button right"
                onClick={goToNext}
            >
                <ChevronRight />
            </IconButton>

            {/* Modal (reused from Projects) */}
            {isModalOpen && selectedProject && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeModal}>
                            ×
                        </button>
                        <div className={styles.modalContent}>
                            <div className={styles.modalImage}>
                                <img
                                    src={selectedProject.images[0]}
                                    alt={selectedProject.title}
                                    onError={(e) => {
                                        e.target.src = 'https://source.unsplash.com/random/600x400?research';
                                    }}
                                />
                            </div>
                            <div className={styles.modalText}>
                                <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                                <p className={styles.modalBrief}>{selectedProject.briefDescription}</p>
                                <div className={styles.modalFullDescription}>
                                    <h3>Project Details</h3>
                                    <p>{selectedProject.fullDescription}</p>
                                </div>
                                <div className={styles.modalLinks}>
                                    <h3>Related Links</h3>
                                    <div className={styles.linksGrid}>
                                        {selectedProject.links.map((link, linkIndex) => (
                                            <a
                                                key={linkIndex}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.modalLink}
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Box>
    );
};

export default Carousel; 