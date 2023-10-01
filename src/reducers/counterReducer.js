const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, counter: state.counter + state.step };
    }
    case "DECREMENT": {
      return { ...state, counter: state.counter - state.step };
    }
    case "STEPUP": {
      return { ...state, step: state.step + 1 };
    }
    case "STEPDOWN": {
      return { ...state, step: state.step - 1 };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
