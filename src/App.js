import React, { Component } from 'react';
import './App.css';
import keys from "./keys.js"

class App extends Component {
  constructor () {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <h1>🍜 A Whole New World (of food) 🍜</h1>

        <p>{keys.yelp}</p>
      </div>
    );
  }

  componentDidMount () {

  }
}

export default App;
