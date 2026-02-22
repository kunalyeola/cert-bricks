import React from 'react';
import { CheckCircle } from 'lucide-react';
import './Features.css';

const Features = () => {
    const featuresList = [
        "Career Tracks aligned with global hiring standards",
        "Hands-on lab environments",
        "Real-world simulation-based exams",
        "Skill Score & Industry Readiness Index",
        "Verifiable digital credentials"
    ];

    return (
        <section className="section features-section">
            <div className="container">
                <div className="features-grid">
                    <div className="features-content">
                        <span className="section-eyebrow">What Makes Us Different</span>
                        <h2 className="section-title">Built Around Real Job Roles. <br /><span className="text-gradient">Not Random Content.</span></h2>
                        <p className="section-subtitle">
                            Instead of selling isolated courses, we offer a comprehensive ecosystem designed to guarantee your capability.
                        </p>

                        <ul className="features-list">
                            {featuresList.map((feature, index) => (
                                <li key={index} className="feature-item glass-panel">
                                    <CheckCircle size={24} className="text-cyan-accent flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="features-visual">
                        <div className="visual-dashboard glass-panel">
                            <div className="dashboard-header">
                                <div className="dots">
                                    <span></span><span></span><span></span>
                                </div>
                                <div className="title">Career Track: Cybersecurity SOC Analyst</div>
                            </div>
                            <div className="dashboard-body">
                                <div className="progress-bar-container">
                                    <div className="progress-label">Industry Readiness</div>
                                    <div className="progress-track">
                                        <div className="progress-fill" style={{ width: '85%' }}></div>
                                    </div>
                                    <div className="progress-value">85 / 100</div>
                                </div>

                                <div className="stats-row">
                                    <div className="stat-box">
                                        <span className="label">Lab Hours</span>
                                        <span className="value">120h+</span>
                                    </div>
                                    <div className="stat-box">
                                        <span className="label">Simulations Passed</span>
                                        <span className="value">14/15</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative background blurs for the visual */}
                        <div className="glow-orb orb-primary"></div>
                        <div className="glow-orb orb-secondary"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
