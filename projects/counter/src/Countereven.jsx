import React, { useState } from 'react';

function CounterWithEvenOdd() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <h2>{count % 2 === 0 ? 'Even' : 'Odd'}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} disabled={count <= 0}>
        Decrement
      </button>
    </div>
  );
}

export default CounterWithEvenOdd;
