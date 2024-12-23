import React from 'react';
import './css/Resources.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faBook,
    faLaptopCode,
    faTrophy,
    faTools,
    faPalette,
    faDownload,
    faFileAlt,
    faChalkboardTeacher,
    faChartLine,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faBook,
    faLaptopCode,
    faTrophy,
    faTools,
    faPalette,
    faDownload,
    faFileAlt,
    faChalkboardTeacher,
    faChartLine
);

const Resources = () => {
    return (
        <div className="resources">
            <header className="header header-with-bg">
                <div className="header-background"></div>
                <div className="header-content">
                    <h1>Resource Hub</h1>
                    <p className="subtitle">Everything you need to succeed in the Ideathon. Access tutorials, tools, templates, and more.</p>
                </div>
            </header>

            <div className="container">
                <section className="resources-section">
                    <h2>Learning Materials</h2>
                    <div className="resources-grid">
                        <div className="resource-card">
                            <div className="icon">
                                <FontAwesomeIcon icon="book" />
                            </div>
                            <h3>Getting Started Guide</h3>
                            <p>New to hackathons? Start here for a comprehensive introduction to ideation, prototyping, and presentation.</p>
                            <a href="#" className="resource-link">Learn More →</a>
                        </div>

                        <div className="resource-card">
                            <div className="icon">
                                <FontAwesomeIcon icon="laptop-code" />
                            </div>
                            <h3>Technical Workshops</h3>
                            <p>Access recorded workshop sessions on web development, AI/ML, cloud computing, and more.</p>
                            <a href="#" className="resource-link">Access Workshops →</a>
                        </div>

                        <div className="resource-card">
                            <div className="icon">
                                <FontAwesomeIcon icon="trophy" />
                            </div>
                            <h3>Past Winners Showcase</h3>
                            <p>Learn from previous winning projects and understand what makes a great submission.</p>
                            <a href="#" className="resource-link">View Projects →</a>
                        </div>
                    </div>
                </section>

                <section className="resources-section">
                    <h2>Tools & Software</h2>
                    <div className="resources-grid">
                        <div className="resource-card">
                            <div className="icon">
                                <FontAwesomeIcon icon="tools" />
                            </div>
                            <h3>Development Tools</h3>
                            <p>Access to premium development tools and environments, including cloud credits and API keys.</p>
                            <a href="#" className="resource-link">Get Access →</a>
                        </div>

                        <div className="resource-card">
                            <div className="icon">
                                <FontAwesomeIcon icon="palette" />
                            </div>
                            <h3>Design Resources</h3>
                            <p>Free access to design tools, UI kits, and stock assets for your project.</p>
                            <a href="#" className="resource-link">Browse Resources →</a>
                        </div>

                        <div className="resource-card">
                            <div className="icon">
                                <FontAwesomeIcon icon="download" />
                            </div>
                            <h3>Software Downloads</h3>
                            <p>Curated list of recommended software and tools for different project types.</p>
                            <a href="#" className="resource-link">Download Now →</a>
                        </div>
                    </div>
                </section>

                <section className="resources-section">
                    <h2>Templates & Guides</h2>
                    <div className="resources-grid">
                        <div className="resource-card">
                            <div className="icon">
                                <FontAwesomeIcon icon="file-alt" />
                            </div>
                            <h3>Project Documentation</h3>
                            <p>Templates for project documentation, including technical specifications and user guides.</p>
                            <a href="#" className="resource-link">Get Templates →</a>
                        </div>

                        <div className="resource-card">
                            <div className="icon">
                                <FontAwesomeIcon icon="chalkboard-teacher" />
                            </div>
                            <h3>Presentation Templates</h3>
                            <p>Professional slide templates for your final project presentation.</p>
                            <a href="#" className="resource-link">Download Templates →</a>
                        </div>


                        <div className="resource-card">
                            <div className="icon">
                                <FontAwesomeIcon icon="chart-line" />
                            </div>
                            <h3>Business Plan Templates</h3>
                            <p>Templates to help you develop the business aspect of your innovation.</p>
                            <a href="#" className="resource-link">Access Templates →</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Resources;
