import React from "react";
import { StatList, StatItem } from "./Statistics.styled";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  if (total === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <StatList className="stats__list">
      <StatItem className="stats__item">Good: {good}</StatItem>
      <StatItem className="stats__item">Neutral: {neutral}</StatItem>
      <StatItem className="stats__item">Bad: {bad}</StatItem>
      <StatItem className="stats__item">Total: {total}</StatItem>
      <StatItem className="stats__item">
        Positive feedback: {positivePercentage + "%"}
      </StatItem>
    </StatList>
  );
}

export default Statistics;
