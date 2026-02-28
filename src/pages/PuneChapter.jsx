import React, { useEffect } from 'react';
import '../components/Hero.css';

const PuneChapter = () => {
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
            {/* Hero Section */}
            <section className="section hero-section" style={{
                minHeight: '50vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: '4rem',
                position: 'relative',
                backgroundImage: 'url(/pune.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 1
                }}></div>
                <div className="bg-glow-wrapper" style={{ zIndex: 2 }}></div>
                <div className="container text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 3, position: 'relative' }}>
                    <h1 className="hero-title reveal delay-100" style={{ maxWidth: '900px', color: '#ffffff' }}>
                        Pune Community <span className="text-gradient">Chapter</span>
                    </h1>
                    <p className="hero-subtitle reveal delay-200 mt-6" style={{ maxWidth: '800px', margin: '2rem auto 1rem', lineHeight: '1.6', fontSize: '1.5rem', fontWeight: 500, color: '#ffffff' }}>
                        Join a Local Chapter. Grow Within Your Domain.
                    </p>
                    <p className="reveal delay-300" style={{ color: '#e0e0e0', fontSize: '1.125rem', marginTop: '1rem' }}>
                        Connect with professionals in your city and collaborate within your industry domain.
                    </p>
                </div>
            </section>

            {/* Sections */}
            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                        {/* Section 1: About Pune Chapter */}
                        <div style={{ backgroundColor: 'var(--bg-card, #ffffff)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-primary)' }}>1. About Pune Chapter</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                The Pune Tech Chapter brings together students, professionals, founders, and technology enthusiasts across cybersecurity, AI, DevOps, and software engineering.
                                Our goal is to foster collaboration, industry alignment, and real-world skill development through structured domain communities and local meetups.<br />
                                The Pune Tech Chapter serves as a local hub for students, professionals, and technology enthusiasts committed to building industry-aligned skills in emerging domains. Through structured domain communities in Cybersecurity, AI & ML, Cloud & DevOps, and Software Development, the chapter fosters collaboration, knowledge sharing, and real-world problem solving.
                                By organizing regular meetups, technical sessions, workshops, and mentorship interactions, the Pune Chapter aims to bridge the gap between academic learning and industry expectations — creating a strong ecosystem of execution-ready talent within the city. </p>
                        </div>

                        {/* Section 2: Chapter Leads */}
                        <div style={{ backgroundColor: 'var(--bg-card, #ffffff)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-primary)' }}>2. Chapter Leads</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Meet the seasoned leaders who guide the Pune chapter, bringing years of industry experience to help mentor and grow the community.
                            </p>
                            {/* Placeholder for leads cards/info */}
                        </div>

                        {/* Section 3: Upcoming meetups */}
                        <div style={{ backgroundColor: 'var(--bg-card, #ffffff)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-primary)' }}>3. Upcoming Meetups</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Stay tuned for our upcoming events! We host monthly meetups consisting of hands-on workshops, expert panels, and networking sessions.
                            </p>
                        </div>

                        {/* Section 4: Industry Communities */}
                        <div style={{ backgroundColor: 'var(--bg-card, #ffffff)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-primary)' }}>4. Industry Communities</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Dive deep into specific domains like offensive security, defense, cloud security, and compliance with our specialized sub-groups.
                            </p>
                        </div>

                        {/* Section 5: Join the Community / Get Involved */}
                        <div style={{ backgroundColor: 'var(--bg-card, #ffffff)', padding: '2.5rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-primary)' }}>5. Join the Community</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                Ready to take the next step? Become an active member of the Pune Chapter today and start contributing.
                            </p>
                            <button style={{
                                padding: '10px 24px',
                                backgroundColor: 'var(--cyan-accent)',
                                color: '#000',
                                borderRadius: '8px',
                                fontWeight: '600',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'opacity 0.2s ease',
                                fontSize: '1rem'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                            >
                                Register Now
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default PuneChapter;
