import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import CertificatePage from './components/certficatePage/CertificatePage';
import Cv from './components/cv/Cv';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        }
      />

      <Route path="/certificatePage" element={<CertificatePage />} />
      <Route path="/cv" element={<Cv />} />
    </Routes>
  );
}

export default App;
