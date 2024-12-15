import s from "./Options.module.css";

const Options = ({ handleClickByOption, handleReset, totalFeedback }) => {
  return (
    <div className={s.button}>
      <button onClick={() => handleClickByOption("good")}>Good</button>
      <button onClick={() => handleClickByOption("neutral")}>Neutral</button>
      <button onClick={() => handleClickByOption("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Options;
