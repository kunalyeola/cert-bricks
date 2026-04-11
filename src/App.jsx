import Navbar from './pages/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IndustryAdvisoryBoard from './pages/industryAdvisoryBoard/IndustryAdvisoryBoard';
import CommunityChapters from './pages/communityChapters/CommunityChapters';
import PuneChapter from './pages/communityChapters/Chapters/PuneChapter';
import ChapterPage from './pages/communityChapters/Chapters/ChapterPage';

import ISDC from './pages/ISDC/ISDC';

function App() {
  return (
    <Router>
      <main className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industry-advisory-board" element={<IndustryAdvisoryBoard />} />
          <Route path="/community-chapters" element={<CommunityChapters />} />
          {/* <Route path="/pune-chapter" element={<PuneChapter />} /> */}
          <Route path="/chapter/:city" element={<ChapterPage />} />
          <Route path="/isdc" element={<ISDC />} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;
