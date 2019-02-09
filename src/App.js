import React, { Component } from 'react';
import InstagramImage from './components/instagramImage';
import './App.scss';

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
          <footer>
            <span>I've Archived my previous portfolio, You can find it </span>
            <a href="/v1/index.html">here</a>
            <div>
              <a href="https://twitter.com/chaituvr_s?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @chaituvr_s</a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
