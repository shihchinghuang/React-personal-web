import React from 'react';
import ProfilePic from '../img/profile-pic.jpeg';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import waves from '../img/waves.svg';

const Homepage = () => {
  return (
    <div className="homePage" id="homepage">
      <div className="leftBox">
        <div className="introCard">
          <img src={ProfilePic} alt="" />
          <h1>黃詩晴</h1>
          <p></p>
          <h3>前端工程師</h3>
          <div className="icon">
            <a href="https://github.com/shihchinghuang?tab=repositories">
              <AiFillGithub className="github" />
            </a>
            <a href="https://www.linkedin.com/in/shihching-huang-4680a68b/">
              <AiFillLinkedin className="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className="rightBox">
        <h2>Hi there!</h2>
        <h3>
          Here's who I am & what I do. <br />
          一起成為同事吧～
        </h3>
        <p>喜歡嘗試不同領域的新事物，迎接挑戰，享受把事情搞懂的過程</p>
        <p>熟悉 HTML/CSS/JavaScript/React/GitHub</p>
        <p>多益 915 分金色證書</p>
        <img className="waves" src={waves} alt="" />
      </div>
    </div>
  );
};

export default Homepage;