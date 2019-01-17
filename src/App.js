import React, { Component } from 'react';
import './App.css';
import axios from "axios";
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
      </div>
    );
  }

  componentDidMount() {
    axios({

    })
  }
}

export default App;
