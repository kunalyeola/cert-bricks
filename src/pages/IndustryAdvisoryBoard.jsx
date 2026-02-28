import React, { useEffect } from 'react';
import { Linkedin } from 'lucide-react';
import '../components/Hero.css';

const IndustryAdvisoryBoard = () => {
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

    return (
        <div style={{ paddingTop: '80px', backgroundColor: 'var(--bg-primary, #ffffff)', minHeight: '100vh' }}>
            <section className="section hero-section">
                <div className="bg-glow-wrapper"></div>
                <div className="container hero-container text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className="hero-title reveal delay-100" style={{ maxWidth: '900px' }}>
                        Built with Leaders Shaping the <br />
                        <span className="text-gradient">Future of Technology</span>
                    </h1>

                    <p className="hero-subtitle reveal delay-200 mt-6" style={{ maxWidth: '800px', margin: '2rem auto 1rem', lineHeight: '1.6' }}>
                        Our platform is guided by experienced CEOs, security leaders, AI pioneers, and technology mentors who understand real-world execution.
                    </p>

                    <p className="hero-subtext reveal delay-300 mx-auto" style={{ maxWidth: '800px', lineHeight: '1.6' }}>
                        Our certification framework and industry alignment strategy are shaped by experienced CEOs, CTOs, founders, and technology leaders across emerging domains.
                    </p>
                </div>
            </section>

            {/* Advisory Board Member */}
            <section className="section" style={{ padding: '4rem 0', backgroundColor: 'var(--bg-secondary, #f8f9fa)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>

                    <div
                        className="advisor-card reveal"
                        style={{
                            backgroundColor: 'var(--bg-card, #ffffff)',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            maxWidth: '400px',
                            width: '100%',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 39, 179, 0.15), 0 0 20px rgba(0, 39, 179, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                        }}
                    >
                        {/* Hero Image / Photo */}
                        <div style={{
                            width: '100%',
                            height: '140px',
                            backgroundColor: 'var(--bg-secondary)',
                            position: 'relative',
                            marginBottom: '60px'
                        }}>
                            <img
                                src="/chetan_image.jpeg"
                                alt="Chetan Photo"
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    objectFit: 'cover',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    bottom: '-50px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    border: '6px solid var(--bg-card, #ffffff)',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                }}
                            />
                        </div>

                        {/* About & LinkedIn */}
                        <div style={{ padding: '2rem', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                                Chetan Wani
                            </h3>
                            <p style={{ color: 'var(--cyan-accent, #00d2ff)', fontWeight: '600', marginBottom: '1rem' }}>
                                Co-Founder & CEO
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                Leading the Pune Chapter with a focus on building a structured, industry-aligned tech ecosystem for emerging professionals.
                            </p>

                            <a
                                href="https://www.linkedin.com/in/chetan-wani-034285290"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    padding: '0.75rem 1.5rem',
                                    backgroundColor: '#0a66c2',
                                    color: '#ffffff',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    transition: 'background-color 0.2s'
                                }}
                            >
                                <Linkedin size={20} />
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default IndustryAdvisoryBoard;
