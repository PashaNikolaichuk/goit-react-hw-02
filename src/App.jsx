import s from "./App.module.css";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import { useEffect, useState } from "react";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [feedBack, setFeedback] = useState(() => {
    const savedFeedBack = localStorage.getItem("feedBack");
    return savedFeedBack
      ? JSON.parse(savedFeedBack)
      : { Good: 0, Neutral: 0, Bad: 0, Total: 0, Positive: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedBack", JSON.stringify(feedBack));
  }, [feedBack]);

  const handleClickByOption = (option) => {
    setFeedback((prev) => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  const totalFeedback = () => {
    return feedBack.Good + feedBack.Neutral + feedBack.Bad;
  };

  const totalPositive = () => {
    const total = totalFeedback();

    return total ? Math.round((feedBack.Good / total) * 100) : 0;
  };

  const handleReset = () => {
    setFeedback({ Good: 0, Neutral: 0, Bad: 0, Total: 0, Positive: 0 });
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Sip Happens Café</h1>
      <p className={s.paragraph}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        handleClickByOption={handleClickByOption}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback() > 0 ? (
        <Feedback
          feedBack={feedBack}
          totalFeedback={totalFeedback}
          totalPositive={totalPositive}
        />
      ) : (
        <Notification message="No feedBack yet" />
      )}
    </div>
  );
};

export default App;
