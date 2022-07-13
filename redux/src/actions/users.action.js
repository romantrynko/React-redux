import { ADD_USER } from '../action-types/users.action-type';

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  };
};
