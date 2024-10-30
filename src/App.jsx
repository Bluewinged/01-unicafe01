import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = (props) => (
  <div>
    {props.text} {props.value}
  </div>
);

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  /* const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
*/
  const handleGoodClick = () => {
    console.log("good clicks", good);
    const updatedGood = good + 1;
    setGood(updatedGood);
    // setAll(updatedGood + neutral + bad);
    // setAverage(average + 1 / all);
  };

  const handleNeutralClick = () => {
    console.log("neutral clicks", neutral);
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    // setAll(good + updatedNeutral + bad);
    // setAverage(average + 0 / all);
  };

  const handleBadClick = () => {
    console.log("bad clicks", bad);
    const updatedBad = bad + 1;
    setBad(updatedBad);
    // setAll(good + neutral + updatedBad);
    // setAverage(average - 1 / all);
  };

  const all = good + neutral + bad;
  const average = (good + neutral * 0 + bad * -1) / all;
  const positive = (good / all) * 100 + " %";

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
