import React, { useState } from 'react';

function CounterWithEvenOdd() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    } else {
      alert("You can't decrement less than 0");
    }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <h2>{count % 2 === 0 ? 'Even' : 'Odd'}</h2>
      <button onClick={handleIncrement}>Increment</button>
      {count > 0 && (
        <button onClick={handleDecrement}>
          Decrement
        </button>
      )}
      {count <= 0 && <p>You can't decrement less than 0</p>}
    </div>
  );
}

export default CounterWithEvenOdd;
