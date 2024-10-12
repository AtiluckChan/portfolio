import './App.css';
import React, { useRef } from 'react';
import Navbar from '../src/Components/Navbar';
import Home from '../src/Components/Home';
import About from '../src/Components/About';
import Skills from '../src/Components/Skills'
import WorkExperience from './Components/WorkExperience';
import Project from './Components/Project';
import Activity from './Components/Activity';
import Certificate from './Components/Certificate';
import Footer from './Components/Footer';

function App() {
  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the About section
    }
  };
  return (
    <div className="App">
      <Navbar scrollToAbout={scrollToAbout} />
      <Home/>
      <About ref={aboutRef} />
      <Skills/>
      <WorkExperience/>
      <Project/>
      <Activity/>
      <Certificate/>
      <Footer/>
    </div>
  );
}

export default App;
