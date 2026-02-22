import React from 'react';
import { Network, Server, Cloud, Cpu, Briefcase } from 'lucide-react';
import './RemoteEconomy.css';

const RemoteEconomy = () => {
    const employers = [
        { icon: <Network size={24} />, name: "Remote-first companies" },
        { icon: <Cloud size={24} />, name: "Global SaaS teams" },
        { icon: <Briefcase size={24} />, name: "Security operations centers" },
        { icon: <Server size={24} />, name: "Cloud-native startups" },
        { icon: <Cpu size={24} />, name: "AI-driven enterprises" }
    ];

    return (
        <section className="section remote-section text-center">
            <div className="container">
                <h2 className="section-title">Built for the <span className="text-gradient">Remote Economy</span></h2>
                <p className="section-subtitle max-w-800 mx-auto">
                    Your certification reflects your ability to work in real-world distributed environments. We prepare you for where the industry is heading.
                </p>

                <div className="employer-tags mt-12">
                    {employers.map((emp, index) => (
                        <div key={index} className="employer-tag glass-panel">
                            <span className="emp-icon">{emp.icon}</span>
                            <span className="emp-name">{emp.name}</span>
                        </div>
                    ))}
                </div>

                <div className="cta-banner glass-panel mt-16">
                    <div className="glow-border"></div>
                    <h2>Ready to Verify Your Skills?</h2>
                    <p>Join the ecosystem of execution-ready professionals.</p>
                    <button className="btn-primary mt-6">Apply for Certification</button>
                </div>
            </div>
        </section>
    );
};

export default RemoteEconomy;
