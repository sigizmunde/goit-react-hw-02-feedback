import React from "react";
import { Box, Caption } from "./App.styled.js";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./Statistics/Statistics";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () =>
    this.setState(({ good }) => {
      return { good: good + 1 };
    });

  addNeutral = () =>
    this.setState(({ neutral }) => {
      return { neutral: neutral + 1 };
    });

  addBad = () =>
    this.setState(({ bad }) => {
      return { bad: bad + 1 };
    });

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, item) => acc + item, 0);

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() &&
    Math.round((this.state.good / this.countTotalFeedback()) * 1000) / 10;

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const goodPercent = this.countPositiveFeedbackPercentage();
    return (
      <Box className="app" column width="50%">
        <div>
          <Caption className="block__caption">Please leave feedback</Caption>
          <FeedbackOptions
            onGoodClick={this.addGood}
            onNeutralClick={this.addNeutral}
            onBadClick={this.addBad}
          />
        </div>
        <div>
          <Caption className="block__caption">Statistics</Caption>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={goodPercent}
          />
        </div>
      </Box>
    );
  }
}

export default App;