import s from "./Options.module.css";

const Options = ({ handleClickByOption, handleReset, totalFeedback }) => {
  return (
    <div className={s.button}>
      <button onClick={() => handleClickByOption("Good")}>Good</button>
      <button onClick={() => handleClickByOption("Neutral")}>Neutral</button>
      <button onClick={() => handleClickByOption("Bad")}>Bad</button>
      {totalFeedback() > 0 && (
        <button onClick={() => handleReset("Reset")}>Reset</button>
      )}
    </div>
  );
};

export default Options;
