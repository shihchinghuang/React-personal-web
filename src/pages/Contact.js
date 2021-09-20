import React from 'react';
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <AiOutlinePhone />
      <AiOutlineMail />
      <a href="https://github.com/shihchinghuang?tab=repositories">
        <AiFillGithub />
      </a>
      <a href="https://www.linkedin.com/in/shihching-huang-4680a68b/">
        <AiFillLinkedin />
      </a>
    </div>
  );
};

export default Contact;
