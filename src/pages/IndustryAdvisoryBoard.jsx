import React, { useEffect } from 'react';
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
        <div style={{ paddingTop: '80px' }}>
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
        </div>
    );
};

export default IndustryAdvisoryBoard;
