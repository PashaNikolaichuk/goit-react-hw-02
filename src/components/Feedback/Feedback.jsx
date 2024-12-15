import s from "./Feedback.module.css";

const Feedback = ({ feedBack, totalFeedback, totalPositive }) => {
  return (
    <ul className={s.list}>
      <li>Good: {feedBack.good}</li>
      <li>Neutral:{feedBack.neutral}</li>
      <li>Bad: {feedBack.bad}</li>
      <li>Total:{totalFeedback}</li>
      <li>Positive: {totalPositive}%</li>
    </ul>
  );
};

export default Feedback;
