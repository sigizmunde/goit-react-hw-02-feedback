import { Panel, Button } from "./FeedbackBtns.styled";

function FeedbackBtns({ onGoodClick, onNeutralClick, onBadClick }) {
  return (
    <Panel className="feedback__panel">
      <Button type="button" className="btn--good" onClick={onGoodClick}>
        Good
      </Button>
      <Button type="button" className="btn--neutral" onClick={onNeutralClick}>
        Neutral
      </Button>
      <Button type="button" className="btn--bad" onClick={onBadClick}>
        Bad
      </Button>
    </Panel>
  );
}

export default FeedbackBtns;
