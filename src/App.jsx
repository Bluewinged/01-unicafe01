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
    <>
      <p>Good - {good}</p>
      <p>Neutral - {neutral}</p>
      <p>Bad - {bad}</p>
      <p>All - {all}</p>
      <p>Average - {average}</p>
      <p>Positive - {positive}</p>
    </>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

/* <Statistics good={good} text="Good" />
<Statistics neutral={neutral} text="Neutral" />
<Statistics bad={bad} text="Bad" />
<Statistics all={all} text="All" />
<Statistics average={average} text="Average" />
<Statistics positive={positive} text="Positive" /> */

export default App;
