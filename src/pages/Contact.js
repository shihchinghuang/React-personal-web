import React, { useState } from 'react';
import footer from '../img/footer.svg';
import ContactIcons from '../components/ContactIcons';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <p>黃詩晴</p>
      <ContactIcons />
      <img src={footer} alt="" />
    </div>
  );
};

export default Contact;
