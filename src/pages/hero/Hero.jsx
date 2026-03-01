import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import '../../assets/css/Hero.css';

const Hero = () => {
  return (
    <section className="section hero-section">
      <div className="bg-glow-wrapper"></div>
      <div className="container hero-container">
        <div className="trust-badge reveal">
          <ShieldCheck size={20} className="text-cyan-accent" />
          <span>Trusted by learners building careers in remote-first tech industries</span>
        </div>

        <h1 className="hero-title reveal delay-100">
          Become Industry-Ready. <br />
          <span className="text-gradient">Not Just Certified.</span>
        </h1>

        <p className="hero-subtitle reveal delay-200">
          An <strong style={{ color: 'var(--text-primary)' }}>Industry-Aligned Certification Platform</strong> that bridges the gap between learning and real-world job requirements.
        </p>

        <p className="hero-subtext reveal delay-300">
          Build real-world skills across Cybersecurity, AI, Cloud, DevOps, Data Engineering, Digital Forensics, GRC, and Product Security — validated through hands-on labs and practical certification.
        </p>

        <div className="hero-cta-group reveal delay-400">
          <button className="btn-primary animate-subtle-pulse">
            Start Your Journey <ArrowRight size={20} />
          </button>
          <button className="btn-secondary text-gradient">
            View Career Tracks
          </button>
        </div>

        <div className="hero-manifesto heroglass-panel mt-12 text-center reveal delay-500">
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
