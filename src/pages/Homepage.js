import React from 'react';
import ProfilePic from '../img/profile-pic.jpeg';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import waves from '../img/waves.svg';
import ContactIcons from '../components/ContactIcons';

const Homepage = () => {
  return (
    <div className="homePage" id="homepage">
      <div className="leftBox">
        <div className="introCard" data-aos="fade-right">
          <img src={ProfilePic} alt="" />
          <div>
            <h1>黃詩晴</h1>
            <p></p>
            <h3>前端工程師</h3>
            <ContactIcons />
          </div>
        </div>
      </div>
      <div className="rightBox">
        <div data-aos="fade-left">
          <h2>Hi there!</h2>
          <h3>
            Here's who I am & what I do. <br />
            一起成為同事吧～
          </h3>
          <p>喜歡嘗試不同領域的新事物，迎接挑戰，享受把事情搞懂的過程</p>
          <p>熟悉 HTML / CSS / JavaScript / React / GitHub</p>
          <p>多益 915 分金色證書</p>
        </div>
      </div>
      <img className="waves" src={waves} alt="" />
    </div>
  );
};

export default Homepage;
