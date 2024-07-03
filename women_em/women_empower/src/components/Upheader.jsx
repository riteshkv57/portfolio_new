import React from 'react';
import './Upheader.css'

const Upheader = () => {
  return (
    // Navigation.jsx
    <>
    <section className="wrapper header-wrapper">
      <div className="container header-container">
        
   

        <div className="left-logo">
          <img alt="Ministry of Women Child Development" src="https://wcd.nic.in/sites/all/themes/cmf/images/left-logo.png" />
          </div>

        <div  className="logo header__logo" id="logo">

            <div><img className="national_emblem" src="https://wcd.nic.in/sites/all/themes/cmf/images/emblem-dark.png" alt="national emblem" /></div>
            <div><span>महिला एवं बाल विकास मंत्रालय </span></div>
            <div><span> Ministry of Women &amp; Child Development</span></div>
        </div>

        <div className="right-logo">
          <a href="https://wcd.nic.in/bbbp-schemes/" target="_blank" title="External link that will open in a new window">
            <img alt="Beti Bachao" src="https://wcd.nic.in/sites/all/themes/cmf/images/beti-bachao-logo2.png" />
          </a>
        </div>

        <a className="toggle-nav-bar" href="">
          <span className="menu-icon"></span>
          <span className="menu-text">Menu</span>
        </a>
      </div>
    </section>
    </>
  );
};

export default Upheader;