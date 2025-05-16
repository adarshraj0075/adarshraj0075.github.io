import React from "react";
import { loadSlim } from "tsparticles-slim";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Resume from './components/Resume';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';

function App() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "linear-gradient(135deg, #181c2f 0%, #2a2250 100%)", overflow: "hidden" }}>
      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <TechStack />
        <Projects />
        <Resume />
        <GitHubStats />
        <Contact />
      </div>
    </div>
  );
}

export default App;
