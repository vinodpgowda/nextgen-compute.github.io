import React, { useState } from 'react';
import styles from './Projects.module.css';
import projects from '../../data/projects';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className={styles.container}>
            <h1>Research Projects</h1>
            <section className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <article
                        key={index}
                        className={styles.card}
                        onClick={() => openModal(project)}
                    >
                        <div className={styles.cardImage}>
                            <img
                                src={project.images[0]}
                                alt={project.title}
                                onError={(e) => {
                                    e.target.src = 'https://source.unsplash.com/random/400x300?research';
                                }}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.briefDescription}>{project.briefDescription}</p>
                            <div className={styles.clickHint}>
                                Click to learn more
                            </div>
                        </div>
                    </article>
                ))}
            </section>

            {/* Modal */}
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
        </div>
    );
};

export default Projects;
