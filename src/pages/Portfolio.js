import React from 'react';
import reactapi from '../img/reactapi.png';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>

      <div className="project">
        <img src={reactapi} alt="" />
        <p>透過React實作fetch API</p>
        <div className="links">
          <button>GitHub Repo</button>
          <button>GitHub Pages</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
