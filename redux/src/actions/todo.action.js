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

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId
  };
};

export const editTodo = () => {
  return {
    type: EDIT_TODO,
    payload: null
  };
};
