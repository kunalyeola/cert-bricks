import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/hero/Hero';
import { getCategories } from '../data/coursesData';

const CoursesAndCertification = () => {
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

    const categories = getCategories();

    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="section hero-section" style={{ minHeight: 'unset', paddingBottom: '4rem' }}>
                <div className="bg-glow-wrapper"></div>
                <div className="container text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 className="hero-title reveal delay-100" style={{ maxWidth: '900px' }}>
                        Course <span className="text-gradient">Categories</span>
                    </h1>

                    <p className="hero-subtitle reveal delay-200 mt-6" style={{ maxWidth: '800px', margin: '2rem auto 1rem', lineHeight: '1.6' }}>
                        Explore specialized paths to empower your career with industry-recognized cybersecurity certifications and hands-on training programs.
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
                        {categories.map((category, idx) => (
                            <div key={idx} className={`reveal delay-${(idx % 3 + 1) * 100}`} style={{
                                backgroundColor: 'var(--bg-card, #ffffff)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                transition: 'box-shadow 0.3s ease-in-out',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'}
                                onClick={() => navigate(`/courses/${encodeURIComponent(category.name)}`)}
                            >
                                <div style={{ height: '160px', backgroundColor: 'var(--cyan-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: '0.8' }}>
                                    <svg style={{ height: '64px', width: '64px', color: '#000' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>

                                <div style={{ padding: '24px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '12px' }}>{category.name}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '20px', flex: '1' }}>{category.description}</p>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', fontSize: '0.85rem', color: 'var(--cyan-accent)', fontWeight: '600' }}>
                                        <span>{category.courseCount} {category.courseCount === 1 ? 'Course' : 'Courses'} Available</span>
                                    </div>

                                    <button style={{
                                        width: '100%',
                                        padding: '10px 16px',
                                        backgroundColor: 'var(--cyan-accent)',
                                        color: '#000',
                                        borderRadius: '8px',
                                        fontWeight: '600',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        transform: 'scale(1)'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.02)';
                                            e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 210, 255, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        View Courses
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursesAndCertification;
