import React from 'react';
import { Crosshair, BookOpen, Laptop, FileSignature, BarChart2, Globe } from 'lucide-react';
import '../../assets/css/HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Crosshair size={24} />,
            title: "Choose a Career Track",
            description: "Select a role aligned with real-world industry demand across Cybersecurity, AI, Cloud, DevOps, or Data Engineering. Clear path. No random learning."
        },
        {
            icon: <BookOpen size={24} />,
            title: "Complete Industry-Aligned Modules",
            description: "Master structured modules designed around real job requirements — tools, workflows, frameworks, and production-level concepts."
        },
        {
            icon: <Laptop size={24} />,
            title: "Train in Real Lab Environments",
            description: "Apply your knowledge in simulated production environments. Deploy systems, analyze incidents, secure infrastructure. Execution over theory."
        },
        {
            icon: <FileSignature size={24} />,
            title: "Pass a Practical Certification Exam",
            description: "Complete a time-bound, hands-on assessment built around real industry scenarios — not just multiple-choice questions. Prove capability under pressure."
        },
        {
            icon: <BarChart2 size={24} />,
            title: "Earn Your Industry Readiness Score",
            description: "Receive a verified Skill Score with detailed metrics on technical proficiency, tool competency, and lab hours completed."
        },
        {
            icon: <Globe size={24} />,
            title: "Access the Verified Talent Ecosystem",
            description: "Unlock access to our integrated Job Network. Employers filter by Skill Score, verify authenticity, and hire real capability. Remote opportunities await."
        }
    ];

    return (
        <section className="section how-it-works-section">
            <div className="container">
                <div className="section-header text-center reveal">
                    <span className="section-eyebrow">How It Works</span>
                    <h2 className="section-title">From Learning to Employment — <br /><span className="text-gradient">Structured for Industry Success</span></h2>
                </div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    {steps.map((step, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left reveal-left' : 'right reveal-right'} delay-${(index % 2 + 1) * 100}`}>
                            <div className="timeline-content glass-panel">
                                <span className="step-number text-gradient">Step {index + 1}</span>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                            <div className="timeline-dot">
                                <div className="dot-icon">{step.icon}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
