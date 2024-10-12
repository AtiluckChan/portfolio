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
  const aboutRef = useRef(null);  // About section ref
  const activityRef = useRef(null);  // Activity section ref

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the About section
    }
  };

  const scrollToActivity = () => {
    if (activityRef.current) {
      activityRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the Activity section
    }
  };

  return (
    <div className="App">
      <Navbar scrollToAbout={scrollToAbout} scrollToActivity={scrollToActivity} />
      <Home />
      <About ref={aboutRef} />
      <Skills />
      <WorkExperience />
      <Project />
      <Activity ref2={activityRef} />
      <Certificate />
      <Footer />
    </div>
  );
}

export default App;

