import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO
} from '../action-types/todo.action-type';
export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
};

export const deleteTodo = (todo) => {
  return {
    type: DELETE_TODO,
    payload: todo
  };
};

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo
  };
};
