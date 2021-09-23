import React from 'react';
import reactapi from '../img/reactapi.png';
import jsminigame from '../img/jsminigame.png';
import jstodolist from '../img/jstodolist.png';
import jsapi from '../img/jsapi.png';
import tnl from '../img/tnl.png';
import meierq from '../img/meierq.png';

const Portfolio = () => {
  return (
    <>
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>

        <div className="projects" data-aos="fade-up">
          <div className="project">
            <img src={reactapi} alt="" />
            <div className="info">
              <p>透過 React 實作 fetch API</p>
              <a
                target="_blank"
                href="https://github.com/shihchinghuang/React-API"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
              <a
                target="_blank"
                href="https://shihchinghuang.github.io/React-API/"
                rel="noreferrer"
              >
                GitHub Pages
              </a>
            </div>
          </div>
          <div className="project">
            <img src={jsminigame} alt="" />
            <div className="info">
              <p>JavaScript 小遊戲</p>
              <a
                target="_blank"
                href="https://github.com/shihchinghuang/JavaScript-Review-Portfolio/tree/main/public/JavaScript-Mini-Games"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
              <a
                target="_blank"
                href="https://shihchinghuang.github.io/JavaScript-Review-Portfolio/public/JavaScript-Mini-Games/index.html"
                rel="noreferrer"
              >
                GitHub Pages
              </a>
            </div>
          </div>
          <div className="project">
            <img src={jstodolist} alt="" />
            <div className="info">
              <p>透過 JavaScript 實作 to-do-list</p>
              <a
                target="_blank"
                href="https://github.com/shihchinghuang/JavaScript-Review-Portfolio/tree/main/public/to-do-list"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
              <a
                target="_blank"
                href="https://shihchinghuang.github.io/JavaScript-Review-Portfolio/public/to-do-list/index.html"
                rel="noreferrer"
              >
                GitHub Pages
              </a>
            </div>
          </div>
          <div className="project">
            <img src={jsapi} alt="" />
            <div className="info">
              <p>透過 JavaScript 實作fetch API</p>
              <a
                target="_blank"
                href="https://github.com/shihchinghuang/JavaScript-Review-Portfolio/tree/main/public/fetch-filter-user-list"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
              <a
                target="_blank"
                href="https://shihchinghuang.github.io/JavaScript-Review-Portfolio/public/fetch-filter-user-list/index.html"
                rel="noreferrer"
              >
                GitHub Pages
              </a>
            </div>
          </div>

          <div className="project">
            <img src={tnl} alt="" />
            <div className="info">
              <p>切版 The News Lens 桌機版網站</p>
              <a
                target="_blank"
                href="https://github.com/shihchinghuang/HTML-CSS-Bootstrap/tree/main/TheNewsLens"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
              <a
                target="_blank"
                href="https://shihchinghuang.github.io/HTML-CSS-Bootstrap/TheNewsLens/index.html"
                rel="noreferrer"
              >
                GitHub Pages
              </a>
            </div>
          </div>
          <div className="project">
            <img src={meierq} alt="" />
            <div className="info">
              <p>切版 MEIER.Q 桌機版網站</p>
              <a
                target="_blank"
                href="https://github.com/shihchinghuang/HTML-CSS-Bootstrap/tree/main/MEIER.Q"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
              <a
                target="_blank"
                href="https://shihchinghuang.github.io/HTML-CSS-Bootstrap/MEIER.Q/index.html"
                rel="noreferrer"
              >
                GitHub Pages
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
