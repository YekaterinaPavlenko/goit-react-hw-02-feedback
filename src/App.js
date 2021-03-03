import React, { Component } from "react";
import "./App.css";

import Feedback from "./components/Feedback/Feedback";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div className="App">
        <Feedback stats={this.state} />
        <h2>Statistics</h2>
      </div>
    );
  }
}

export default App;
