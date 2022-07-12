import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO
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

export const editTodo = () => {
  return {
    type: EDIT_TODO,
    payload: null
  };
};
