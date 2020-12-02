import React, { Component } from "react";
// Components imports
import AwesomeWidget from "./components/AwesomeWidget";
import IntervalTicker from "./components/IntervalTicker";

// CSS imports 
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AwesomeWidget />
        <IntervalTicker />
      </div>
    );
  }
}

export default App;
