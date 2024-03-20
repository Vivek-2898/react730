import React, { useState } from 'react';
import './Counter.css'; // Import the CSS file

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <div className="button-container">
        <button className="button" onClick={increment}>Increment</button>
        <button className="button" onClick={decrement} disabled={count === 0}>Decrement</button>
      </div>
      <button className="reset-button" onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
