import React, { useEffect } from 'react';
import "../../assets/css/Isdc.css";
import { Shield, Brain, Cloud, Code, Layers } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
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
            icon: <Shield size={28} />,
            title: "Cybersecurity Community",
            color: "cyan",
            items: [
                "Ethical hacking awareness sessions",
                "Capture The Flag (CTF) competitions",
                "Security fundamentals workshops",
                "Threat simulation labs",
                "Industry guest talks"
            ]
        },
        {
            icon: <Brain size={28} />,
            title: "AI & ML, Data Science",
            color: "purple",
            items: [
                "ML bootcamps",
                "AI project sessions",
                "LLM & generative AI awareness",
                "Data analytics workshops",
                "Research-driven sessions"
            ]
        },
        {
            icon: <Cloud size={28} />,
            title: "Cloud & DevOps Community",
            color: "blue",
            items: [
                "Cloud fundamentals workshops",
                "Deployment labs",
                "CI/CD pipelines training",
                "Infrastructure as Code sessions",
                "DevOps career pathways"
            ]
        },
        {
            icon: <Code size={28} />,
            title: "Developer Community",
            color: "pink",
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
        <div className='isdc' style={{ backgroundColor: 'var(--bg-primary, #ffffff)', minHeight: '100vh' }}>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-wrapper container">

                    {/* LEFT CONTENT */}
                    <div className="hero-left reveal-left">
                        <h1 className="hero-title">
                            Bringing Industry-Aligned <br />
                            <span className="hero-description">Skill Development to Campuses</span>
                        </h1>

                        <p className="hero-subtitle">
                            Partner with us to establish a dedicated Skill Development Centre
                            in your institution — empowering students with practical,
                            industry-ready capabilities in emerging technologies.
                        </p>

                        <button className="btn-primary hero-btn">
                            Partner With Us
                        </button>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="hero-right reveal-right">
                        <DotLottieReact
                            src="https://lottie.host/5c5c4969-6b22-4873-b256-51e7d5df886f/vAm3BHwwK2.lottie"
                            loop
                            autoplay
                            style={{ width: "100%", maxWidth: "500px" }}
                        />
                    </div>

                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="container">

                    <div className="about-header reveal text-center">
                        <h2 className="section-title">🎯 What is ISDC?</h2>
                    </div>

                    <div className="about-card reveal">
                        <h3>About the Industry Skill Development Center</h3>
                        <p>
                            The Skill Development Center is a structured, domain-focused initiative established within partner colleges to:
                        </p>
                        <div className="about-grid">
                            {[
                                "Bridge academic learning with industry expectations",
                                "Build hands-on technical skills",
                                "Conduct domain-specific communities",
                                "Organize free workshops & events",
                                "Improve student employability"
                            ].map((item, index) => (
                                <div key={index} className="about-item">
                                    <span>✓</span>
                                    <p style={{ color: "#fff" }} >{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            {/* <section className="section" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-secondary, #f8f9fa)' }}>
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
            </section> */}

            {/* Core Domains Offered */}
            <section className="section" style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div className="domains-header reveal">
                        <h2 className="section-title">
                            <Layers className="title-icon" />
                            Core Domains Offered
                        </h2>
                        <p>Explore specialized communities designed to build real-world skills</p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1rem'
                    }}>
                        <div className="domains-grid">
                            {domains.map((domain, index) => (
                                <div key={index} className={`domain-card ${domain.color} reveal`}>

                                    <div className="domain-icon">
                                        {domain.icon}
                                    </div>

                                    <h3>{domain.title}</h3>

                                    <ul>
                                        {domain.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>

                                </div>
                            ))}
                        </div>
                        {/* {domains.map((domain, index) => (
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
                        ))} */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ISDC;
