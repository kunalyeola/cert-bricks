import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../pages/hero/Hero';
import { courses } from '../data/coursesData';

const CategoryCourses = () => {
    const { categoryName } = useParams();
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

    const decodedCategory = decodeURIComponent(categoryName);

    // Safety check - if we somehow navigate without a category, go back
    if (!decodedCategory) {
        navigate('/courses-and-certification');
        return null;
    }

    const filteredCourses = decodedCategory === 'All'
        ? courses
        : courses.filter(course => course.category === decodedCategory);

    return (
        <div style={{ paddingTop: '80px' }}>
            <section className="section hero-section" style={{ minHeight: 'unset', paddingBottom: '4rem' }}>
                <div className="bg-glow-wrapper"></div>
                <div className="container text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <button
                        onClick={() => navigate('/courses-and-certification')}
                        style={{
                            alignSelf: 'flex-start',
                            marginBottom: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--cyan-accent)',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: '500'
                        }}
                    >
                        <svg style={{ width: '20px', height: '20px', marginRight: '8px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Categories
                    </button>

                    <h1 className="hero-title reveal delay-100" style={{ maxWidth: '900px' }}>
                        {decodedCategory} <span className="text-gradient">Courses</span>
                    </h1>

                    <p className="hero-subtitle reveal delay-200 mt-6" style={{ maxWidth: '800px', margin: '2rem auto 1rem', lineHeight: '1.6' }}>
                        Explore our specialized {decodedCategory !== 'All' ? decodedCategory.toLowerCase() : ''} training paths.
                    </p>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', paddingBottom: '6rem' }}>
                <div className="container">
                    {filteredCourses.length === 0 ? (
                        <div className="text-center" style={{ padding: '4rem 0' }}>
                            <h3 style={{ color: 'var(--text-primary)' }}>No courses found in this category.</h3>
                        </div>
                    ) : (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '2.5rem',
                            marginTop: '1rem'
                        }}>
                            {filteredCourses.map((course, idx) => (
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
                                >
                                    <div style={{ height: '160px', backgroundColor: 'var(--cyan-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: '0.8' }}>
                                        <svg style={{ height: '64px', width: '64px', color: '#000' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>

                                    <div style={{ padding: '24px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '12px' }}>{course.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '20px', flex: '1' }}>{course.description}</p>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(0, 210, 255, 0.1)', color: 'var(--cyan-accent)', padding: '4px 8px', borderRadius: '4px', fontWeight: '500' }}>
                                                {course.level}
                                            </span>
                                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                                <svg style={{ width: '16px', height: '16px', marginRight: '4px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                {course.duration}
                                            </span>
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
                                            Enroll Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default CategoryCourses;
