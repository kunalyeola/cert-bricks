import React, { useRef } from 'react';

import { ShieldAlert, Users, TrendingDown } from 'lucide-react';
import '../../assets/css/SkillGap.css';

const SkillGap = () => {
    const handleMouseMove = (e, card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    };

    const handleMouseLeave = (card) => {
        card.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale(1)";
    };

    const cards = [
        {
            icon: <ShieldAlert size={32} />,
            title: "Cybersecurity Impact",
            stat: "$4M+",
            description: "Average global cost of a data breach. Organizations facing skill shortages experience higher breach costs and longer containment times."
        },
        {
            icon: <Users size={32} />,
            title: "Hiring & Productivity Gap",
            stat: "6–9 Months",
            description: "Average time to hire skilled tech professionals. Extended hiring cycles delay projects, increase operational costs, and slow innovation."

        },
        {
            icon: <TrendingDown size={32} />,
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
                        <div
                            key={index}
                            className="skill-card"
                            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                        >
                            <div className="card-icon-wrapper">
                                {card.icon}
                            </div>
                            <h3 className="card-stat">{card.stat}</h3>
                            <h4 className="card-title">{card.title}</h4>
                            <p className="card-description">{card.description}</p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
        // <section className="section skill-gap-section reveal">
        //     <div className="container">
        //         <div className="section-header text-center">
        //             <span className="section-eyebrow">The Skill Gap Is a Business Risk</span>
        //             <h2 className="section-title">Emerging Technology Without Verified Skills Is Expensive.</h2>
        //             <p className="section-subtitle">
        //                 Across cybersecurity, cloud, AI, DevOps, and compliance — organizations are paying the price for skill gaps in execution.
        //             </p>
        //         </div>

        //         <div className="cards-grid">
        //             {cards.map((card, index) => (
        //                 <div key={index} className={`skill-card reveal delay-${(index + 1) * 100}`}>
        //                     <div className="card-icon-wrapper">
        //                         {card.icon}
        //                     </div>
        //                     <h3 className="card-stat">{card.stat}</h3>
        //                     <h4 className="card-title">{card.title}</h4>
        //                     <p className="card-description">{card.description}</p>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </section>
    );
};

export default SkillGap;
