import React from 'react';
import { Network, Server, Cloud, Cpu, Briefcase } from 'lucide-react';
import '../../assets/css/RemoteEconomy.css';

const RemoteEconomy = () => {
    const employers = [
        { icon: <Network size={24} />, name: "Remote-first companies" },
        { icon: <Cloud size={24} />, name: "Global SaaS teams" },
        { icon: <Briefcase size={24} />, name: "Security operations centers" },
        { icon: <Server size={24} />, name: "Cloud-native startups" },
        { icon: <Cpu size={24} />, name: "AI-driven enterprises" }
    ];

    return (
        <section className="section remote-section text-center reveal">
            <div className="container">
                <h2 className="section-title">Built for the <span className="text-gradient">Remote Economy</span></h2>
                <p className="section-subtitle max-w-800 mx-auto">
                    Your certification reflects your ability to work in real-world distributed environments. We prepare you for where the industry is heading.
                </p>

                <div className="employer-grid">
                    {employers.map((emp, index) => (
                        <div key={index} className="employer-card reveal-right">
                            <div className="emp-icon-wrap">{emp.icon}</div>
                            <h4 className="emp-title">{emp.name}</h4>
                        </div>
                    ))}
                </div>

                {/* <div className="cta-banner glass-panel mt-16 reveal delay-300">
                    <div className="glow-border"></div>
                    <h2>Ready to Verify Your Skills?</h2>
                    <p>Join the ecosystem of execution-ready professionals.</p>
                    <button className="btn-primary mt-6">Apply for Certification</button>
                </div> */}
                <div className="cta-panel">
                    <div className="cta-content">
                        <h3>Ready to Verify Your Skills?</h3>
                        <p>Join the ecosystem of execution-ready professionals trusted by global teams.</p>
                    </div>

                    <div className="cta-actions">
                        <button className="btn-primary">
                            Apply for Certification
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RemoteEconomy;
