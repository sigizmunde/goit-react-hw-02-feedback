import React from "react";
import { Box, Caption } from "./App.styled.js";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification.jsx";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = ({ option }) => {
    this.setState((state) => ({ [option]: state[option] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, item) => acc + item, 0);

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() &&
    Math.round((this.state.good / this.countTotalFeedback()) * 1000) / 10;

  stateKeys = Object.keys(this.state);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const goodPercent = this.countPositiveFeedbackPercentage();
    return (
      <Box className="app" column width="50%">
        <div>
          <Caption className="block__caption">Please leave feedback</Caption>
          <FeedbackOptions
            options={this.stateKeys}
            onLeaveFeedback={this.addFeedback}
          />
        </div>
        <div>
          <Caption className="block__caption">Statistics</Caption>
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={goodPercent}
            />
          )}
        </div>
      </Box>
    );
  }
}

export default App;
