import React, { useEffect } from 'react';
import '../components/Hero.css';
import { Shield, Brain, Cloud, Code } from 'lucide-react';

const ISDC = () => {
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        revealElements.forEach(el => observer.observe(el));

        return () => {
            revealElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    const domains = [
        {
            icon: <Shield size={32} className="text-cyan-accent" />,
            title: "Cybersecurity Community",
            items: [
                "Ethical hacking awareness sessions",
                "Capture The Flag (CTF) competitions",
                "Security fundamentals workshops",
                "Threat simulation labs",
                "Industry guest talks"
            ]
        },
        {
            icon: <Brain size={32} className="text-cyan-accent" />,
            title: "AI & ML, Data Science",
            items: [
                "ML bootcamps",
                "AI project sessions",
                "LLM & generative AI awareness",
                "Data analytics workshops",
                "Research-driven sessions"
            ]
        },
        {
            icon: <Cloud size={32} className="text-cyan-accent" />,
            title: "Cloud & DevOps Community",
            items: [
                "Cloud fundamentals workshops",
                "Deployment labs",
                "CI/CD pipelines training",
                "Infrastructure as Code sessions",
                "DevOps career pathways"
            ]
        },
        {
            icon: <Code size={32} className="text-cyan-accent" />,
            title: "Developer Community",
            items: [
                "Coding sessions",
                "Hackathons",
                "System design workshops",
                "Open-source contributions",
                "Full-stack bootcamps",
                "Git Projects Competitions"
            ]
        }
    ];

    return (
        <div style={{ paddingTop: '80px', backgroundColor: 'var(--bg-primary, #ffffff)', minHeight: '100vh' }}>
            {/* Hero Section */}
            <section className="section hero-section">
                <div className="bg-glow-wrapper"></div>
                <div className="container hero-container text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className="hero-title reveal delay-100" style={{ maxWidth: '1000px' }}>
                        Bringing Industry-Aligned <br />
                        <span className="text-gradient">Skill Development to Campuses</span>
                    </h1>

                    <p className="hero-subtitle reveal delay-200 mt-6" style={{ maxWidth: '800px', margin: '2rem auto 1rem', lineHeight: '1.6' }}>
                        Partner with us to establish a dedicated Skill Development Centre in your institution — empowering students with practical, industry-ready capabilities in emerging technologies.
                    </p>

                    <div className="hero-cta-group reveal delay-300">
                        <button className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
                            Partner With Us
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-secondary, #f8f9fa)' }}>
                <div className="container">
                    <div className="reveal" style={{
                        backgroundColor: 'var(--bg-card, #ffffff)',
                        padding: '3rem',
                        borderRadius: '16px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', gap: '1rem' }}>
                            <span style={{ fontSize: '2rem' }}>🎯</span>
                            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-primary)', margin: 0 }}>
                                What Is the Industry Skill Development Center?
                            </h2>
                        </div>

                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--cyan-accent)', marginBottom: '1.5rem', textAlign: 'center' }}>
                            About the Industry Skill Development Center (SDC)
                        </h3>

                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            The Skill Development Center is a structured, domain-focused initiative established within partner colleges to:
                        </p>

                        <ul style={{
                            listStyleType: 'none',
                            padding: 0,
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '1rem'
                        }}>
                            {[
                                "Bridge academic learning with industry expectations",
                                "Build hands-on technical skills",
                                "Conduct domain-specific communities",
                                "Organize free workshops & events",
                                "Improve student employability"
                            ].map((item, index) => (
                                <li key={index} style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '0.75rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.6'
                                }}>
                                    <div style={{
                                        color: 'var(--cyan-accent)',
                                        marginTop: '4px'
                                    }}>✓</div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Core Domains Offered */}
            <section className="section" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <span style={{ fontSize: '2.5rem' }}>🏗</span> Core Domains Offered
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}>
                        {domains.map((domain, index) => (
                            <div key={index} className={`reveal delay-${(index % 4 + 1) * 100}`} style={{
                                backgroundColor: 'var(--bg-card, #ffffff)',
                                padding: '2rem',
                                borderRadius: '16px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                height: '100%'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
                                }}
                            >
                                <div style={{
                                    backgroundColor: 'var(--bg-secondary)',
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    {domain.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>
                                    {domain.title}
                                </h3>
                                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                    {domain.items.map((item, idx) => (
                                        <li key={idx} style={{
                                            position: 'relative',
                                            paddingLeft: '1.5rem',
                                            marginBottom: '0.75rem',
                                            color: 'var(--text-secondary)',
                                            lineHeight: '1.5'
                                        }}>
                                            <span style={{
                                                position: 'absolute',
                                                left: 0,
                                                top: '8px',
                                                width: '6px',
                                                height: '6px',
                                                borderRadius: '50%',
                                                backgroundColor: 'var(--cyan-accent)'
                                            }}></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ISDC;
