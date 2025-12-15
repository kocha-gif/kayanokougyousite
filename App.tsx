import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Recruit from './pages/Recruit';
import Contact from './pages/Contact';
import Company from './pages/Company';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Company />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;