import React, { useReducer } from 'react';

const initialState = { count: 0, color: 'black' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1, color: 'red' };
    case 'decrement':
      return { count: state.count - 1, color: 'blue' };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{ backgroundColor: state.color }}>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

export default App;
