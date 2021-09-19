import React from 'react';
import './styles/styles.css';
import Nav from './components/Nav';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  return (
    <>
      <Nav />
      <Homepage />
      <Portfolio />
      <Resume />
    </>
  );
}

export default App;
