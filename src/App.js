import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Certificates from './components/certificates/Certificates';

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
    </>
  );
}

export default App;