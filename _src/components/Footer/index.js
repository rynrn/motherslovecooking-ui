import React from 'react';
import './Footer.css';

const year = new Date().getFullYear();

const Footer = () => (
  <div className="footer">
    כל הזכויות שמורות למאמא באהבה {year}
  </div>
);


export default Footer;
