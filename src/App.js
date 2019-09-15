import React, { Component } from 'react';
import InstagramImage from './components/instagramImage';
import './App.scss';
import logo from './images/logo_transparent.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <div className="main">
          <img src={logo} alt="logo" className="main-logo" />
          <div className="title">Watch out this space</div>
          <div>Building something awesome very soon :)</div>
          <InstagramImage />
          <div className="twitter-timeline-wrapper">
            <a
              className="twitter-timeline"
              data-width="540"
              data-height="500"
              href="https://twitter.com/chaituvr_s?ref_src=twsrc%5Etfw"
            >
            Tweets by chaituvr_s
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
          </div>
          <div className="main-curve">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#000" fillOpacity="1" d="M0,96L30,112C60,128,120,160,180,192C240,224,300,256,360,256C420,256,480,224,540,218.7C600,213,660,235,720,218.7C780,203,840,149,900,133.3C960,117,1020,139,1080,149.3C1140,160,1200,160,1260,149.3C1320,139,1380,117,1410,106.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z" />
            </svg>
          </div>
          <footer>
            <div className="footer-notice-message">
              <span>Archived my previous portfolio, You can find it </span>
              <a href="/v1/index.html">here</a>
              <div>
                <a href="https://twitter.com/chaituvr_s?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @chaituvr_s</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
