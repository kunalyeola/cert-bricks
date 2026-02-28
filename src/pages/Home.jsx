import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import SkillGap from '../components/SkillGap';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import ReadinessIndex from '../components/ReadinessIndex';
import RemoteEconomy from '../components/RemoteEconomy';

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
