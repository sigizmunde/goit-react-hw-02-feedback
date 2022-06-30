import { Message } from "./Notification.styled";

function Notification({ message }) {
  return <Message className="notification">{message}</Message>;
}

export default Notification;
