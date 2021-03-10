import React from 'react';

const Navigation = () => (
    <nav>
        <div className="nav-wrapper">

        
      <div className="logo-box">YSecure</div>
      <ul className="navbar mobile-nav" id="navbar">
        <li>
          <a href="#how-it-works">How it works</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#contacts">help</a>
        </li>
  
        <a href="#subscription-packages" className="buy-btn">
          buy
        </a>
        <a className="close mobile-nav" href="#close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </a>
      </ul>
      <a className="hamburger" href="#navbar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 8h16M4 16h16"
          />
        </svg>
      </a>
  
      <div className="desktop-menu">
        <a href="#how-it-works">How it works</a>
        <a href="#compare">Compare</a>
        <a href="#tech">technology</a>
        <a href="#contacts">help</a>
        <a href="#buy" className="buy-btn">buy</a>
      </div>
      </div>
    </nav>
  );

  export default Navigation;