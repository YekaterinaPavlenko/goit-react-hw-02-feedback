import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section/Section";

import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleCountFeedback = ({ option }) => {
    // console.log(option);
    this.setState((prevState) => {
      return {
        [option.toLowerCase()]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const totalF = values.reduce((acc, value) => acc + value, 0);

    return totalF;
  };

  countPositiveFeedbackPercentage = () => {
    let totalFeedback = this.countTotalFeedback();
    let positive = 0;
    positive = (this.state.good * 100) / totalFeedback;

    return totalFeedback === 0 ? 0 : Math.round(positive);
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleCountFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
