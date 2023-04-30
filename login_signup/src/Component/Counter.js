import React from 'react';

function Counter(props) {
  return (
    <div>
      <p>Count: {props.count}</p>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Increment</button>
    </div>
  );
}

export default Counter;
