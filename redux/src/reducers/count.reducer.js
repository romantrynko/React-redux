const defaultState = {
  count: 0,
  property: 11,
  a: {
    b: 1,
    c: 2
  }
};

export function counterReducer(state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload };
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}
