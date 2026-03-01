import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/hero/Hero';

const CommunityChapters = () => {
    const navigate = useNavigate();
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

    const chapters = [
        { city: 'Pune', country: 'India', image: '/pune.png' },
        { city: 'Bangalore', country: 'India', image: '/banglore.png' },
        { city: 'Hyderabad', country: 'India', image: '/hyedarbad.png' },
        { city: 'Chennai', country: 'India', image: '/chennai.png' },
        { city: 'Mumbai', country: 'India', image: '/mumbai.png' },
        { city: 'Nashik', country: 'India', image: '/Nashik.png' },
    ];

    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="section hero-section" style={{ minHeight: 'unset', paddingBottom: '4rem' }}>
                <div className="bg-glow-wrapper"></div>
                <div className="container text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className="hero-title reveal delay-100" style={{ maxWidth: '900px' }}>
                        Our Global <span className="text-gradient">Chapters</span>
                    </h1>

                    <p className="hero-subtitle reveal delay-200 mt-6" style={{ maxWidth: '800px', margin: '2rem auto 1rem', lineHeight: '1.6' }}>
                        Join a cert Bricks chapter near you and connect with local tech enthusiasts.
                    </p>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', paddingBottom: '6rem' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem',
                        marginTop: '1rem'
                    }}>
                        {chapters.map((chapter, idx) => (
                            <div key={idx} className={`reveal delay-${(idx % 3 + 1) * 100}`} style={{
                                backgroundColor: 'var(--bg-card, #ffffff)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                transition: 'box-shadow 0.3s ease-in-out',
                                cursor: 'pointer'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'}
                            >
                                <img src={chapter.image} alt={`${chapter.city} Chapter`} style={{ width: '100%', height: '192px', objectFit: 'cover' }} />

                                <div style={{ padding: '24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                        <svg style={{ height: '20px', width: '20px', color: 'var(--cyan-accent)', marginRight: '8px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>{chapter.city}, {chapter.country}</h3>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <button style={{
                                            padding: '8px 16px',
                                            backgroundColor: chapter.city === 'Pune' ? 'var(--cyan-accent)' : '#a0a0a0',
                                            color: '#000',
                                            borderRadius: '8px',
                                            fontWeight: '600',
                                            border: 'none',
                                            cursor: chapter.city === 'Pune' ? 'pointer' : 'not-allowed',
                                            transition: 'all 0.3s ease',
                                            transform: 'scale(1)'
                                        }}
                                            onMouseEnter={(e) => {
                                                if (chapter.city === 'Pune') {
                                                    e.currentTarget.style.transform = 'scale(1.05)';
                                                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 210, 255, 0.4)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (chapter.city === 'Pune') {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                    e.currentTarget.style.boxShadow = 'none';
                                                }
                                            }}
                                            disabled={chapter.city !== 'Pune'}
                                            onClick={() => {
                                                if (chapter.city === 'Pune') {
                                                    navigate('/pune-chapter');
                                                }
                                            }}
                                        >
                                            {chapter.city === 'Pune' ? 'Join Chapter' : 'Coming Soon'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CommunityChapters;
