import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import '../../assets/css/Features.css';

const Features = () => {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const featuresList = [
        "Career Tracks aligned with global hiring standards",
        "Hands-on lab environments",
        "Real-world simulation-based exams",
        "Skill Score & Industry Readiness Index",
        "Verifiable digital credentials"
    ];

    return (
        <section ref={sectionRef} className="section features-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-eyebrow">What Makes Us Different</span>
                    <h2 className="section-title">Built Around Real Job Roles.</h2>
                    <p className="section-subtitle">
                        Instead of selling isolated courses, we offer a comprehensive ecosystem designed to guarantee your capability.
                    </p>
                </div>
                <div className="features-grid">
                    <div className="features-content reveal-left">
                        <svg width="0" height="0">
                            <defs>
                                <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#3B82F6" />
                                    <stop offset="50%" stopColor="#6366F1" />
                                    <stop offset="100%" stopColor="#A855F7" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <ul className="features-list">
                            {featuresList.map((feature, index) => (
                                <li
                                    key={index}
                                    className={`feature-item ${visible ? "show" : ""}`}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <CheckCircle size={24} className="svg flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="features-visual reveal-right">
                        <div className="visual-dashboard delay-200">
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
                                        <span className="value">  120h+</span>
                                    </div>
                                    <div className="stat-box">
                                        <span className="label">Simulations Passed</span>
                                        <span className="value">  14/15</span>
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
