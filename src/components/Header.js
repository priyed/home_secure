import React from 'react';
import '../App.css';
import Navigation from "./Navigation";

const Header = () => (
    <header>
      <div className="header-wrapper">
        <Navigation />
        <div className="text-box">
          <div className="heading-primary">
          <h1>Smart home security for everyone.</h1>
          </div>
          
          <a href="#how">Watch Video</a>
          <svg
            className="scroll-indicator"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </header>
  );

  export default Header;