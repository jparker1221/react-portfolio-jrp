import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Footer from './components/pages/Footer';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div class='background'>
          <h1 style={{ fontFamily: 'Open Sans, sans-serif' }} class='mainheader'>Jon Parker's Portfolio<Navigation /></h1>

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
