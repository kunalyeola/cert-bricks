import React from 'react';
import { Award, Clock, Wrench, Activity, ShieldCheck } from 'lucide-react';
import '../../assets/css/ReadinessIndex.css';
import { useEffect, useRef, useState } from 'react';

const ReadinessIndex = () => {
    const targetScore = 92;
    const [score, setScore] = useState(0);
    const cardRef = useRef(null);
    const circumference = 2 * Math.PI * 45; // r=45

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const duration = 1500;
                    const increment = targetScore / (duration / 16);

                    const counter = setInterval(() => {
                        start += increment;
                        if (start >= targetScore) {
                            start = targetScore;
                            clearInterval(counter);
                        }
                        setScore(Math.floor(start));
                    }, 16);
                }
            },
            { threshold: 0.5 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

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
                    <div className="readiness-visual reveal-left">
                        <div className="profile-card" ref={cardRef}>
                            <div className="profile-header">
                                <div className="profile-avatar">
                                    <div className="avatar-placeholder"></div>
                                </div>

                                <div className="profile-info">
                                    <div className="name-row">
                                        <h3 className="profile-name">Alex M.</h3>
                                        <span className="verified-badge">
                                            <ShieldCheck size={14} />
                                            Verified
                                        </span>
                                    </div>
                                    <p className="profile-role">Certified Cloud Security Engineer</p>
                                </div>

                                <span className="status-chip">Available</span>
                            </div>

                            <div className="score-container">
                                <div className="score-ring">
                                    <svg viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#3B82F6" />
                                                <stop offset="50%" stopColor="#6366F1" />
                                                <stop offset="100%" stopColor="#A855F7" />
                                            </linearGradient>
                                        </defs>

                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="45"
                                            className="ring-bg"
                                        />

                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="45"
                                            className="ring-fill"
                                            strokeDasharray={circumference}
                                            strokeDashoffset={circumference - (score / 100) * circumference}
                                            strokeLinecap="round"
                                        />
                                    </svg>

                                    <div className="score-number">{score}</div>
                                </div>
                                <div className="score-label text-gradient">Industry Readiness Score</div>
                            </div>

                            <div className="metrics-list">
                                {metrics.map((metric, index) => (
                                    <div key={index} className="metric-item">
                                        <div className="metric-icon">{metric.icon}</div>
                                        <div className="metric-content">
                                            <span className="metric-label">{metric.label}</span>
                                            <div className="metric-bar">
                                                <div className="metric-fill"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="verification-footer">
                                <ShieldCheck size={16} />
                                Last Verified: Jan 2026 • CertBricks Validation System
                            </div>
                        </div>
                    </div>

                    <div className="readiness-content reveal-right">
                        <span className="section-eyebrow">The Industry Readiness Index</span>
                        <h2 className="section-title">Measurable Skill Validation. <br /><span className="text-gradient">No Guesswork.</span></h2>
                        <p className="section-subtitle">
                            Every learner receives a comprehensive, verified profile reflecting actual capability. Designed to help employers hire based on evidence, not just a resume.
                        </p>

                        {/* <div className="action-box">
                            <p>Hire candidates who have already proven they can do the job in production environments.</p>
                            <button className="btn-primary mt-4">Explore Talent Network</button>
                        </div> */}
                        <div className="action-box">
                            <div className="action-content">
                                <h4 className="action-title">
                                    Hire with Confidence.
                                </h4>
                                <p className="action-text">
                                    Access verified candidates with measurable, production-ready skills.
                                </p>
                            </div>

                            <div className="action-cta">
                                <button className="btn-primary">
                                    Explore Talent Network
                                </button>
                                <span className="action-meta">
                                    Trusted by forward-thinking companies
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadinessIndex;
