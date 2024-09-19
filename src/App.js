import './App.css';
import React, { useRef } from 'react';
import Navbar from '../src/Components/Navbar';
import Home from '../src/Components/Home';
import About from '../src/Components/About';
import Skills from '../src/Components/Skills'

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
    </div>
  );
}

export default App;
