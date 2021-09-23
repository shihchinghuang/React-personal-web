import React from 'react';
import './styles/styles.css';
import Nav from './components/Nav';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import reactapi from './img/reactapi.png';
import jsminigame from './img/jsminigame.png';
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
