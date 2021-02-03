import React from "react";

import "./App.css";

const Navigation = () => (
  <>
    <nav>
      <div className="logo-box"></div>
        <ul className="navbar" id="navbar">
          <li>
            <a href="#how-it-works">How it works</a>
          </li>
          <li>
            <a href="#compare">Compare</a>
          </li>
          <li>
            <a href="#tech">technology</a>
          </li>
          <li>
            <a href="#help">help</a>
          </li>
      
          <a href="#buy" className="buy-btn">buy</a>
          <a className="close" href="#close">
          
          <img src="https://ljc-dev.github.io/testing0/ham-close.svg" alt="close" />
          </a>
        </ul>
        <a class="hamburger" href="#navbar">
        <img src="https://ljc-dev.github.io/testing0/ham.svg" alt="menu" />
        </a>

      <div className="desktop-menu">
        <a href="#how-it-works">How it works</a>
        <a href="#compare">Compare</a>
        <a href="#tech">technology</a>
        <a href="#help">help</a>
        <a href="#buy">buy</a>
      </div>
    </nav>
  </>
);

const Header = () => (
  <header>
    <div className="header-wrapper">
      <Navigation />
      <div className="text-box">
        <h1 className="heading-primary">Smart home security for everyone.</h1>
        <a href="#how">Watch Video</a>
      </div>
    </div>
  </header>
);

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
