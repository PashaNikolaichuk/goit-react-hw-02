import s from "./App.module.css";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import { useEffect, useState } from "react";
import Notification from "./components/Notification/Notification";
import Description from "./components/Description/Description";

const App = () => {
  const [feedBack, setFeedback] = useState(() => {
    const savedFeedBack = localStorage.getItem("feedBack");
    return savedFeedBack
      ? JSON.parse(savedFeedBack)
      : { good: 0, neutral: 0, bad: 0 };
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

  const totalFeedback = feedBack.bad + feedBack.good + feedBack.neutral;

  const totalPositive = totalFeedback
    ? Math.round((feedBack.good / totalFeedback) * 100)
    : 0;

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={s.container}>
      <Description />
      <Options
        handleClickByOption={handleClickByOption}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
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
