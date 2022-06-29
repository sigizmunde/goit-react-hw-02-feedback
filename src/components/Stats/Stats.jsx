import React from "react";
import { StatList, StatItem } from "./Stats.styled";

function Stats({ state }) {
  const stateKeys = Object.keys(state);
  return (
    <StatList className="stats__list">
      {stateKeys.map((key) => (
        <StatItem className="stats__item" key={key}>
          {key}: {state[key]}
        </StatItem>
      ))}
    </StatList>
  );
}

export default Stats;
