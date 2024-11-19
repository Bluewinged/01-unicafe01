import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  let average = (good + neutral * 0 + bad * -1) / all;
  let positive = (good / all) * 100 + " %";

  console.log(all, average, positive);

  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given yet</p>;
  }

  return (
    <p>
      {Statistics.text} {Statistics.value}
    </p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    console.log("good clicks", good);
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const handleNeutralClick = () => {
    console.log("neutral clicks", neutral);
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const handleBadClick = () => {
    console.log("bad clicks", bad);
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <h1>Statistics</h1>
      <Statistics value={good} text="Good" />
      <Statistics value={neutral} text="Neutral" />
      <Statistics value={bad} text="Bad" />
      <Statistics value={all} text="All" />
      <Statistics value={average} text="Average" />
      <Statistics value={positive} text="Positive" />
    </div>
  );
};

export default App;
