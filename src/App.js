import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section/Section";
// import Feedback from "./components/Feedback/Feedback";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleAddCount = (stat) => {
    this.setState((prevState) => {
      // console.log(prevState[stat]);
      return {
        [stat]: prevState[stat] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    let total = 0;
    for (let statValue of Object.values(this.state)) {
      total += statValue;
    }
    // console.log(total);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positive = 0;
    // console.log(this.state.good);
    // console.log(this.countTotalFeedback());
    positive = (this.state.good * 100) / this.countTotalFeedback();
    // console.log(Math.round(positive) + "%");
    return Math.round(positive);
  };
  render() {
    const { good, neutral, bad } = this.state;
    // console.log(this.state.neutral);
    const statsKeys = Object.keys(this.state);
    console.log(good);
    // const entries = Object.entries(this.state);
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <ul>
            {statsKeys.map((stat) => {
              return (
                <li key={stat}>
                  <button
                    type="radio"
                    onClick={() => {
                      console.log(`кликнули в ${stat}`);
                      this.handleAddCount(stat);
                      this.countTotalFeedback();
                      this.countPositiveFeedbackPercentage();
                    }}
                  >
                    {stat}
                  </button>
                </li>
              );
            })}
          </ul>
          {/* <Feedback stats={this.state} /> */}
        </Section>
        <Section title="Statistics">
          {/* <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          /> */}
          <ul>
            {statsKeys.map((stat) => {
              return (
                <li key={stat}>
                  <p>
                    {stat}: {this.state[stat]}
                  </p>
                </li>
              );
            })}
            <li key="total">
              <p>Total: {this.countTotalFeedback()}</p>
            </li>
            <li key="positive">
              <p>
                Positive feedback:
                {this.countPositiveFeedbackPercentage()
                  ? this.countPositiveFeedbackPercentage()
                  : 0}
                %
              </p>
            </li>
          </ul>
        </Section>
      </div>
    );
  }
}

export default App;
