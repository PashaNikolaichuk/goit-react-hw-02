import s from "./Feedback.module.css";

const Feedback = ({ feedBack, totalFeedback, totalPositive }) => {
  return (
    <ul className={s.list}>
      <li>Good: {feedBack.Good}</li>
      <li>Neutral:{feedBack.Neutral}</li>
      <li>Bad: {feedBack.Bad}</li>
      <li>Total:{totalFeedback()}</li>
      <li>Positive: {totalPositive()}%</li>
    </ul>
  );
};

export default Feedback;
