import React from 'react';
import './styles/styles.css';
import Nav from './components/Nav';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="section">
        <Homepage />
        <Portfolio />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
