import React from "react";
import { ArrowRight, ShieldCheck, Cloud, Cpu } from "lucide-react";
import "../../assets/css/Hero.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Hero = () => {
  return (
    <section className="hero-section">

      {/* Background glow */}
      <div className="hero-bg-glow"></div>

      <div className="container hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">

          <div className="hero-badge">
            <ShieldCheck size={18} />
            Trusted by learners building careers in remote-first tech industries
          </div>

          <h1 className="hero-title reveal delay-100">
            Become Industry-Ready.<br />
            <span>
              Not Just Certified.
            </span>
          </h1>

          <p className="hero-description reveal delay-200">
            An <strong style={{ color: 'var(--text-primary)' }}>Industry-Aligned Certification Platform</strong> that bridges the gap between learning and real-world job requirements.
          </p>

          <p className="hero-subtext reveal delay-300">
            Build real-world skills across Cybersecurity, AI, Cloud, DevOps, Data Engineering, Digital Forensics, GRC, and Product Security — validated through hands-on labs and practical certification.
          </p>

          <div className="hero-buttons">
            <button className="hero_btn">
              Start Learning <ArrowRight size={18} />
            </button>

            <button className="btn-secondary">
              Explore Certifications
            </button>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          {/* <DotLottieReact
            src="https://lottie.host/f7fc349e-cc29-429b-9f3e-944fbe954d9f/ARjUobqyzA.lottie"
            loop
            autoplay
          /> */}

          {/* <DotLottieReact
            src="https://lottie.host/5c5c4969-6b22-4873-b256-51e7d5df886f/vAm3BHwwK2.lottie"
            loop
            autoplay
          /> */}
          <DotLottieReact
            src="https://lottie.host/6030ce2d-c216-4324-a85d-c957e359751e/gFWHb6RIx9.lottie"
            loop
            autoplay
          />
          {/* <DotLottieReact
            src="https://lottie.host/0fa30a9c-b4d8-463c-b58a-c95112218372/TcuZRiJhcx.lottie"
            loop
            autoplay
          /> */}

        </div>

      </div>
    </section>
  );
};

export default Hero;