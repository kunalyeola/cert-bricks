import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="section hero-section animate-fade-in-up">
      <div className="bg-glow-wrapper"></div>
      <div className="container hero-container">
        <div className="trust-badge">
          <ShieldCheck size={20} className="text-cyan-accent" />
          <span>Trusted by learners building careers in remote-first tech industries</span>
        </div>
        
        <h1 className="hero-title">
          Become Industry-Ready. <br/>
          <span className="text-gradient">Not Just Certified.</span>
        </h1>
        
        <p className="hero-subtitle">
          An <strong style={{color: 'var(--text-primary)'}}>Industry-Aligned Certification Platform</strong> that bridges the gap between learning and real-world job requirements.
        </p>

        <p className="hero-subtext">
          Build real-world skills across Cybersecurity, AI, Cloud, DevOps, Data Engineering, Digital Forensics, GRC, and Product Security — validated through hands-on labs and practical certification.
        </p>

        <div className="hero-cta-group">
          <button className="btn-primary">
            Start Your Journey <ArrowRight size={20} />
          </button>
          <button className="btn-secondary">
            View Career Tracks
          </button>
        </div>

        <div className="hero-manifesto glass-panel mt-12 text-center">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            The Industry Doesn’t Need More Courses.
          </h2>
          <h2 className="text-gradient text-glow" style={{ fontSize: '2rem' }}>
            It Needs Verified Skills.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
