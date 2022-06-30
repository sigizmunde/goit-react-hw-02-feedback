import { Panel, Button } from "./FeedbackOptions.styled";
import { nanoid } from "nanoid";

function FeedbackOptions({ options, onLeaveFeedback }) {
  const id = nanoid();
  return (
    <Panel className="feedback__panel">
      {options.map((option) => (
        <Button
          type="button"
          key={option + id}
          className={"btn--" + option}
          onClick={() => onLeaveFeedback({ option })}
        >
          {option}
        </Button>
      ))}
    </Panel>
  );
}

export default FeedbackOptions;
