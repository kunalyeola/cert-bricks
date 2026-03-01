import React, { useEffect } from 'react';
import Hero from '../pages/hero/Hero';
import SkillGap from '../pages/skillGap/SkillGap';
import Features from '../pages/features/Features';
import HowItWorks from '../pages/howitworks/HowItWorks';
import ReadinessIndex from '../pages/readinessIndex/ReadinessIndex';
import RemoteEconomy from '../pages/remoteEconomy/RemoteEconomy';

const Home = () => {
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
        <>
            <Hero />
            <SkillGap />
            <Features />
            <HowItWorks />
            <ReadinessIndex />
            <RemoteEconomy />
        </>
    );
};

export default Home;
