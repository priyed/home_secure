import React from "react";
import "./App.css";
import facebook from "./assets/facebook.svg";
import googleplus from "./assets/google-plus.svg";
import twitter from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";


const Navigation = () => (
  <nav>
    <div className="logo-box">YSecure</div>
    <ul className="navbar" id="navbar">
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
      <a className="close" href="#close">
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
      <a href="#buy">buy</a>
    </div>
  </nav>
);

const Header = () => (
  <header>
    <div className="header-wrapper">
      <Navigation />
      <div className="text-box">
        <h1 className="heading-primary">Smart home security for everyone.</h1>
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

const Main = () => (
  <main>
    <div className="main">
      <section id="features" className="features-container main-wrapper">
        <h3>Main Features</h3>
        <hr></hr>
        <p className="features-intro">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
          dignissimos! Lorem ipsum dolor sit amet, consectetur.
        </p>
        <div className="features">
          <div className="feature">
            <svg
              className="feature-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <h3>Easy Customization</h3>
            <p>
              An enim nullam tempor gravida donec enim ipsum blandit porta justo
              integer odio velna vitae auctor integer.
            </p>
          </div>

          <div className="feature">
            <svg
              className="feature-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
            <h3>Image Processing and Identification</h3>
            <p>
              An enim nullam tempor gravida donec enim ipsum blandit porta justo
              integer odio velna vitae auctor integer.
            </p>
          </div>

          <div className="feature">
            <svg
              className="feature-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <h3>Easy Maintenance</h3>
            <p>
              An enim nullam tempor gravida donec enim ipsum blandit porta justo
              integer odio velna vitae auctor integer.
            </p>
          </div>
        </div>
      </section>

      <section className="intro-video-section">
        <div className="video-section main-wrapper">
          <h3>Watch us in action</h3>
          <hr></hr>
          <p>
            Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac
            condimentum. Vestibulum congue posuere lacus, id tincidunt nisi
            porta sit amet. Suspendisse et sapien varius, pellentesque dui non,
            semper orci.
          </p>
          <div className="video-icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </section>

      <section
        id="subscription-packages"
        className="subscribe-section main-wrapper"
      >
        <h3>Subcription pricing</h3>
        <hr></hr>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
          dignissimos! <br />
          Lorem ipsum dolor sit amet, consectetur.
        </p>

        <div className="subscribe-packages">
          <div className="subscribe-package">
            <h3>Free</h3>
            <h2>$00</h2>
            <p>Consectetur adipiscing</p>
            <p>Nunc luctus nulla et tellus</p>
            <p>Suspendisse quis metus</p>
            <p>Vestibul varius fermentum erat</p>
            <a href="#getplan">Get Setup</a>
          </div>
          <div className="subscribe-package">
            <h3>Standard</h3>
            <h2>$3.99</h2>
            <p>Consectetur adipiscing</p>
            <p>Nunc luctus nulla et tellus</p>
            <p>Suspendisse quis metus</p>
            <p>Vestibul varius fermentum erat</p>
            <a href="#getplan">Get Setup</a>
          </div>
          <div className="subscribe-package">
            <h3>Premium</h3>
            <h2>$9</h2>
            <p>Consectetur adipiscing</p>
            <p>Nunc luctus nulla et tellus</p>
            <p>Suspendisse quis metus</p>
            <p>Vestibul varius fermentum erat</p>
            <a href="#getplan">Get Setup</a>
          </div>
        </div>
      </section>
    </div>

    <section className="contacts-section " id="contacts">
      <div className="main-wrapper contacts-wrap">
        <div>
          <h3>Contact us</h3>
          <p>Centerville Road, UT 19808, US</p>
          <p>
            Phone: <span>(+94 123 456 789)</span>
          </p>
          <p>
            Email: <a href="#email"><span>(contact@ysecure.com)</span></a>
          </p><br/>

          <div className="social-media-btns">
           <a href="#facebook"><img src={facebook} alt="facebook icon" /></a>
           <a href="#facebook"><img src={twitter} alt="twitter icon " /></a>
           <a href="#facebook"><img src={googleplus} alt="googleplus icon " /></a>
           <a href="#facebook"><img src={linkedin} alt="linkedIn icon " /></a>
          </div>
        </div>

        <form autoComplete="on">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email"required  />
          <textarea placeholder="Message" required />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  </main>
);

const Footer = () => (
  <footer>
    <div className="footer-container"></div>
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
