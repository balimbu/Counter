// useState hook in React
const {useState} = React;
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

const CounterButton = () => {
  const [count, setCount] = useState(27);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount}> Increment</button>
    </div>
  );
};