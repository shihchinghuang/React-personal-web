import React, { useState } from 'react';
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import footer from '../img/footer.svg';

const Contact = () => {
  const [copy, setCopy] = useState(false);
  const [instruction, setInstruction] = useState('');
  const [iconSize, setIconSize] = useState('1');

  const showInstruction = () => {
    setInstruction('Click to copy!');
  };

  const hideInstruction = () => {
    setInstruction('');
  };

  const style = { transform: `scale(${iconSize})` };

  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <p>黃詩晴</p>
      <div className="info">
        <div className="email" data-aos="fade-up" data-aos-delay="100">
          <CopyToClipboard
            text="sunnyhuang.sc@gmail.com"
            style={style}
            onCopy={() => {
              setCopy(true);
            }}
            onMouseOver={() => {
              showInstruction();
              setIconSize('1.5');
            }}
            onMouseOut={() => {
              hideInstruction();
              setIconSize('1');
            }}
          >
            <AiOutlineMail className="infoicon" />
          </CopyToClipboard>
          <p>{instruction}</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="150">
          <a
            target="_blank"
            href="https://github.com/shihchinghuang?tab=repositories"
            rel="noreferrer"
          >
            <AiFillGithub className="infoicon" />
          </a>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/shihching-huang-4680a68b/"
            rel="noreferrer"
          >
            <AiFillLinkedin className="infoicon" />
          </a>
        </div>
      </div>
      <img src={footer} alt="" />
    </div>
  );
};

export default Contact;
