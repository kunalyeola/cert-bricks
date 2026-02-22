import React from 'react';
import { ShieldAlert, Users, TrendingDown } from 'lucide-react';
import './SkillGap.css';

const SkillGap = () => {
    const cards = [
        {
            icon: <ShieldAlert size={32} className="text-purple-accent" />,
            title: "Cybersecurity Impact",
            stat: "$4M+",
            description: "Average global cost of a data breach. Organizations facing skill shortages experience higher breach costs and longer containment times."
        },
        {
            icon: <Users size={32} className="text-cyan-accent" />,
            title: "Hiring & Productivity Gap",
            stat: "6–9 Months",
            description: "Average time to hire skilled tech professionals. Extended hiring cycles delay projects, increase operational costs, and slow innovation."
        },
        {
            icon: <TrendingDown size={32} className="text-blue-accent" />,
            title: "Execution Risk",
            stat: "70%+",
            description: "Of digital transformation initiatives fail to meet objectives. Lack of execution-ready talent is one of the primary drivers of project failure."
        }
    ];

    return (
        <section className="section skill-gap-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-eyebrow">The Skill Gap Is a Business Risk</span>
                    <h2 className="section-title">Emerging Technology Without Verified Skills Is Expensive.</h2>
                    <p className="section-subtitle">
                        Across cybersecurity, cloud, AI, DevOps, and compliance — organizations are paying the price for skill gaps in execution.
                    </p>
                </div>

                <div className="cards-grid">
                    {cards.map((card, index) => (
                        <div key={index} className="glass-panel skill-card">
                            <div className="card-icon-wrapper">
                                {card.icon}
                            </div>
                            <h3 className="card-stat text-gradient">{card.stat}</h3>
                            <h4 className="card-title">{card.title}</h4>
                            <p className="card-description">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillGap;
