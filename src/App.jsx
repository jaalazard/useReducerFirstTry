import React from "react";
import {
  INCREMENT,
  DECREMENT,
  STEPUP,
  STEPDOWN
} from "./actions/counterActions";
import { useReducer } from "react";
import reducer from "./reducers/counterReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    step: 1
  });

  return (
    <>
      <div>
        <p>Counter: {state.counter}</p>
        <p>Step: {state.step} </p>
        <button onClick={() => dispatch({ type: INCREMENT })}>
          Incrémenter
        </button>
        <button onClick={() => dispatch({ type: DECREMENT })}>
          Décrémenter
        </button>
        <br />
        <button onClick={() => dispatch({ type: STEPUP })}>
          Incrémenter le pas
        </button>
        <button onClick={() => dispatch({ type: STEPDOWN })}>
          Décrémenter le pas
        </button>
      </div>
    </>
  );
}

export default App;