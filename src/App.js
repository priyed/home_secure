import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";



const Footer = () => (
  <footer>
    <div className="footer-container">
    
      <p>All copyrights reserved &copy; 2021 - Designed & Developed by Priyed</p>
    </div>
  </footer>
)

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
