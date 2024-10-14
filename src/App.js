import './App.css';
import React, { useRef } from 'react';
import Navbar from '../src/Components/Navbar';
import Home from '../src/Components/Home';
import About from '../src/Components/About';
import Skills from '../src/Components/Skills';
import WorkExperience from './Components/WorkExperience';
import Project from './Components/Project';
import Activity from './Components/Activity';
import Certificate from './Components/Certificate';
import Footer from './Components/Footer';

function App() {
  const sectionRefs = useRef({
    home: null,
    about: null,
    skills: null,
    workExperience: null,
    project: null,
    activity: null,
    certificate: null,
  });

  const scrollToSection = (section) => {
    const ref = sectionRefs.current[section];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <Home ref={(el) => (sectionRefs.current.home = el)} />
      <About ref={(el) => (sectionRefs.current.about = el)} />
      <Skills ref={(el) => (sectionRefs.current.skills = el)} />
      <WorkExperience ref={(el) => (sectionRefs.current.workExperience = el)} />
      <Project ref={(el) => (sectionRefs.current.project = el)} />
      <Activity ref={(el) => (sectionRefs.current.activity = el)} />
      <Certificate ref={(el) => (sectionRefs.current.certificate = el)} />
      <Footer />
    </div>
  );
}

export default App;

