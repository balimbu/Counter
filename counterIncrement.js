// useState hook in React
const {useState} = React;
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// functional component
const CounterButton = () => {
    console.log('inside counter button')
    // [ access, set] = useState(original value/data);
  const [count, setCount] = useState(27); // initial value is 27

  const incrementCount = () => {
    console.log("clicked");
    setCount(count + 1);
  };

  return (  
    <div>
      <h1>Counter: {count} </h1>
      <button onClick = {incrementCount} > Increment </button>
    </div>
  );

};

let root = ReactDOM.createRoot(document.getElementById('mydiv'));
root.render(< CounterButton/>);