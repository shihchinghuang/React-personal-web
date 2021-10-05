import React from 'react';
import Project from '../components/Project';
import reactapi from '../img/reactapi.png';
import jsminigame from '../img/jsminigame.png';
import jstodolist from '../img/jstodolist.png';
import jsapi from '../img/jsapi.png';
import tnl from '../img/tnl.png';
import meierq from '../img/meierq.png';
import lunarphase from '../img/lunarphase.png';

const Portfolio = () => {
  const data = [
    {
      title: '資策會期末專題',
      img: lunarphase,
      repo: 'https://github.com/ruby-619/Lunar_Phase_React',
      pages: 'https://github.com/weichieh123/finalNode_lunar_phase',
    },
    {
      title: '透過 React 實作 fetch API',
      img: reactapi,
      repo: 'https://github.com/shihchinghuang/React-API',
      pages: 'https://shihchinghuang.github.io/React-API/',
    },
    {
      title: 'JavaScript 小遊戲',
      img: jsminigame,
      repo: 'https://github.com/shihchinghuang/JavaScript-Review-Portfolio/tree/main/public/JavaScript-Mini-Games',
      pages:
        'https://shihchinghuang.github.io/JavaScript-Review-Portfolio/public/JavaScript-Mini-Games/index.html',
    },
    {
      title: '透過 JavaScript 實作 to-do-list',
      img: jstodolist,
      repo: 'https://github.com/shihchinghuang/JavaScript-Review-Portfolio/tree/main/public/to-do-list',
      pages:
        'https://shihchinghuang.github.io/JavaScript-Review-Portfolio/public/to-do-list/index.html',
    },
    {
      title: '透過 JavaScript 實作 fetch API',
      img: jsapi,
      repo: 'https://github.com/shihchinghuang/JavaScript-Review-Portfolio/tree/main/public/fetch-filter-user-list',
      pages:
        'https://shihchinghuang.github.io/JavaScript-Review-Portfolio/public/fetch-filter-user-list/index.html',
    },
    {
      title: '切版 The News Lens 桌機版網站',
      img: tnl,
      repo: 'https://github.com/shihchinghuang/HTML-CSS-Bootstrap/tree/main/TheNewsLens',
      pages:
        'https://shihchinghuang.github.io/HTML-CSS-Bootstrap/TheNewsLens/index.html',
    },
    {
      title: '切版 MEIER.Q 桌機版網站',
      img: meierq,
      repo: 'https://github.com/shihchinghuang/HTML-CSS-Bootstrap/tree/main/MEIER.Q',
      pages:
        'https://shihchinghuang.github.io/HTML-CSS-Bootstrap/MEIER.Q/index.html',
    },
  ];
  return (
    <>
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>

        <div className="projects" data-aos="fade-up">
          {data.map((v, i) => {
            console.log(data.title);
            return <Project data={v} i={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
