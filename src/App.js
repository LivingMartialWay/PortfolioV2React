import React from 'react';
import './App.css';
import Projects from './components/Projects'
import Techlist from './components/Techlist'

function App() {
  return (
    <div className="whole">
        <div className="gears"></div>

        <Techlist />

        <div className="city"></div>

        <Projects />

        <div className="footer"></div>
    </div>
  );
}

export default App;
