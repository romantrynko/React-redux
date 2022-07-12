import { combineReducers } from 'redux';

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
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
}

const todoDefaultState = {
  todos: []
};

export function todoReducer(state = todoDefaultState, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = action.payload;
      const { todos } = state;
      return { todos: [...todos, newTodo] };
    }
    case 'DELETE_TODO': {
      const { id } = action.payload;
      const { todos } = state;

      const index = todos.findIndex((item) => item.id === id);

      if (index > -1) {
        return {
          todos: [...todos].splice(index, 1)
        };
      }
      return state;
    }
    case 'EDIT_TODO': {
      return {};
    }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({ counterReducer, todoReducer });
