import React, {useState} from 'react';

export default function ButtonCounter() {

  const [state, setState] = useState({numberOfClicks: 0});

  function handleClick(event) {
    setState({numberOfClicks: state.numberOfClicks +1 });
  }

  return (
    <div className="ButtonCounter">
      <button onClick={handleClick}>Click me</button>

      <p>Number of clicks: {state.numberOfClicks}</p>

      <p>This code was rendered at: {new Date().toString()}</p>
    </div>
  );
}