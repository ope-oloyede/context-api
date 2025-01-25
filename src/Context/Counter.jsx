import React, { useContext } from 'react';
import { CounterContext } from './Context API/user-context-provider';

function Counter() {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ margin: '0 10px', padding: '10px 20px' }}>
        Plus
      </button>
      <button onClick={decrement} style={{ margin: '0 10px', padding: '10px 20px' }}>
        Minus
      </button>
    </div>
  );
}

export default Counter;
