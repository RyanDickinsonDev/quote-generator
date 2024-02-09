import React, { Component } from 'react';
import './index.css';
import Quotes from './data/quotes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: { body: "No Quotes", author: null }
    };
  }

  componentDidMount() {
    this.setRandomQuote();
  }

  setRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    this.setState({ quote: Quotes[randomIndex] });
  };

  handleClick = () => {
    this.setRandomQuote();
  };

  render() {
    const { quote } = this.state;

    return (
      <div className="wrapper">
        <div id="quote-box">
          <div id="quote-body">
            <p id="text">{quote.body}</p>
            <p id="author">{quote.author}</p>
          </div>
          <div id="quote-footer">
            <button id="new-quote" onClick={this.handleClick}>
              Generate Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;