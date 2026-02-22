import React from 'react';
import Hero from './components/Hero';
import SkillGap from './components/SkillGap';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ReadinessIndex from './components/ReadinessIndex';
import RemoteEconomy from './components/RemoteEconomy';

function App() {
  return (
    <main className="app-container">
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
