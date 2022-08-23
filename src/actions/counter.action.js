import { DECREMENT, INCREMENT, RESET } from '../action-types/counter.action-type';

export const inc = () => {
  return {
    type: INCREMENT,
    payload: 2
  };
};

export const dec = () => {
  return {
    type: DECREMENT,
    payload: 5
  };
};

export const reset = () => {
  return {
    type: RESET,
    payload: null
  };
};
