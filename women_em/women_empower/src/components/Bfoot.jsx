import React from 'react';
import './Bfoot.css';

const Bfoot = () => {
  return (
    <>
    <div className="footer-top-wrapper">
      <div className="container footer-top-container">
        <ul className="menu">
          <li className="menu__item is-leaf first leaf">
            <a href="/website-policy" title="Website Policies" className="menu__link" role="link">Website Policies</a>
          </li>
          <li className="menu__item is-leaf leaf">
            <a href="/help" title="Help" className="menu__link" role="link">Help</a>
          </li>
          <li className="menu__item is-leaf leaf">
            <a href="/feedback" title="Feedback" className="menu__link" role="link">Feedback</a>
          </li>
          <li className="menu__item is-leaf leaf">
            <a href="/contactus" title="Contact Us" className="menu__link" role="link">Contact Us</a>
          </li>
          <li className="menu__item is-leaf leaf">
            <a href="/visitor-analytics" title="Visitor Analytics" className="menu__link" role="link">Visitor Analytics</a>
          </li>
          <li className="menu__item is-leaf last leaf">
            <a href="/terms-conditions" title="Terms &amp; Conditions" className="menu__link" role="link">Terms &amp; Conditions</a>
          </li>
          <li className="menu__item is-leaf last leaf">
            <a href="/disclaimer" title="Disclaimer" className="menu__link" role="link">Disclaimer</a>
          </li>
          <li className="menu__item is-leaf last leaf">
            <a href="/web-information-manager-1" title="Web Information Manager" className="menu__link" role="link">Web Information Manager</a>
          </li>
          <li className="menu__item is-leaf last leaf">
            <a href="/faqs" title="FAQ's" className="menu__link" role="link">FAQ's</a>
          </li>
        </ul>
      </div>
    </div>


    <div className="centered-container">
    {/* Your content here */}
    <div className="copyright">
      © Copyright <strong><span> National Commission for Women</span></strong>.
      All Rights Reserved. <br />
      {/* NCW Women Helpline Platform Powered by IIDS. Development Partner :  */}
      {/* <a className="text-light" href="https://dic.gov.in" target="_blank" rel="noopener noreferrer">Digital India Corporation</a> */}
    </div>
  </div>
  </>
  );
};

export default Bfoot;