import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillGap from './components/SkillGap';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ReadinessIndex from './components/ReadinessIndex';
import RemoteEconomy from './components/RemoteEconomy';

function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
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
    <main className="app-container">
      <Navbar />
      <Hero />
      <SkillGap />
      <Features />
      <HowItWorks />
      <ReadinessIndex />
      <RemoteEconomy />
    </main>
  );
}

export default App;
