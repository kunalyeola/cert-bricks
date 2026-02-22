import React from 'react';
import { Award, Clock, Wrench, Activity, ShieldCheck } from 'lucide-react';
import './ReadinessIndex.css';

const ReadinessIndex = () => {
    const metrics = [
        { icon: <Activity size={20} />, label: "Skill Score (0–100)" },
        { icon: <Clock size={20} />, label: "Practical Lab Hours" },
        { icon: <Wrench size={20} />, label: "Tool Proficiency" },
        { icon: <Award size={20} />, label: "Scenario-Based Performance" },
        { icon: <ShieldCheck size={20} />, label: "Verified Digital Badge" }
    ];

    return (
        <section className="section readiness-section">
            <div className="container">
                <div className="readiness-grid">
                    <div className="readiness-visual">
                        <div className="profile-card glass-panel">
                            <div className="profile-header">
                                <div className="profile-avatar">
                                    <div className="avatar-placeholder"></div>
                                </div>
                                <div className="profile-info">
                                    <h3 className="profile-name">Alex M.</h3>
                                    <p className="profile-role">Certified Cloud Security Engineer</p>
                                </div>
                                <div className="badge-glow"></div>
                            </div>

                            <div className="score-container">
                                <div className="score-ring">
                                    <svg viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45" className="ring-bg"></circle>
                                        <circle cx="50" cy="50" r="45" className="ring-fill" strokeDasharray="283" strokeDashoffset="28" strokeLinecap="round"></circle>
                                    </svg>
                                    <div className="score-number">92</div>
                                </div>
                                <div className="score-label text-gradient">Industry Readiness Score</div>
                            </div>

                            <div className="metrics-list">
                                {metrics.map((metric, index) => (
                                    <div key={index} className="metric-item">
                                        <div className="metric-icon">{metric.icon}</div>
                                        <span className="metric-label">{metric.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="readiness-content">
                        <span className="section-eyebrow">The Industry Readiness Index</span>
                        <h2 className="section-title">Measurable Skill Validation. <br /><span className="text-gradient">No Guesswork.</span></h2>
                        <p className="section-subtitle">
                            Every learner receives a comprehensive, verified profile reflecting actual capability. Designed to help employers hire based on evidence, not just a resume.
                        </p>

                        <div className="action-box">
                            <p>Hire candidates who have already proven they can do the job in production environments.</p>
                            <button className="btn-primary mt-4">Explore Talent Network</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadinessIndex;
