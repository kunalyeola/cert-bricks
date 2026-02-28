import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import IndustryAdvisoryBoard from './pages/IndustryAdvisoryBoard';
import CommunityChapters from './pages/CommunityChapters';

function App() {
  return (
    <Router>
      <main className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industry-advisory-board" element={<IndustryAdvisoryBoard />} />
          <Route path="/community-chapters" element={<CommunityChapters />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
