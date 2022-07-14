import { combineReducers } from 'redux';
import { usersList } from '../constants/index';

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
      const arrayCopy = [...todos];
      arrayCopy.splice(index, 1);

      if (index > -1) {
        return {
          todos: arrayCopy
        };
      }
      return state;
    }
    case 'UPDATE_TODO': {
      const { id } = action.payload;
      const { todos } = state;
      const arrayCopy = [...todos];

      const todo = action.payload;

      const index = todos.findIndex((item) => item.id === id);

      if (index > -1) {
        arrayCopy[index] = todo;
        return {
          todos: arrayCopy
        };
      }
      return state;
    }

    case 'STATUS_CHANGE': {
      const { id } = action.payload;
      const { todos } = state;
      const arrayCopy = [...todos];

      const index = todos.findIndex((item) => item.id === id);

      if (index > -1) {
        arrayCopy[index].doneStatus = !arrayCopy[index].doneStatus;
        return {
          todos: arrayCopy
        };
      }
      return state;
    }
    default:
      return state;
  }
}

const usersState = { users: usersList };

export const userReducer = (state = usersState, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      const newUser = action.payload;
      const { users } = state;

      return {
        users: [...users, newUser]
      };
    }
    default:
      return state;
  }
};

const postsState = {
  posts: [],
  isLoading: false
};

export const postsReducer = (state = postsState, action) => {
  switch (action.type) {
    case 'LOAD_POSTS': {
      return {
        ...state,
        posts: action.payload
      };
    }
    case 'START_POSTS_LOADING': {
      return {
        ...state,
        isLoading: true
      };
    }
    case 'STOP_POSTS_LOADING': {
      return {
        ...state,
        isLoading: false
      };
    }
    default:
      return state;
  }
};

const commentsState = {
  comments: [],
  isCommentsLoading: false,
  commentsLoaded: false,
  showComments: false,
  error: '',
  commentsSectionExpanded: false
};

export const commentsReducer = (state = commentsState, action) => {
  switch (action.type) {
    case 'LOAD_COMMENTS': {
      return {
        ...state,
        comments: action.payload
      };
    }
    case 'IS_COMMENTS_LOADING': {
      return {
        ...state,
        isCommentsLoading: action.payload
      };
    }
    case 'COMMENTS_LOADED': {
      return {
        ...state,
        commentsLoaded: action.payload
      };
    }
    case 'SHOW_COMMENTS': {
      return {
        ...state,
        showComments: action.payload
      };
    }
    case 'ERROR': {
      return {
        ...state,
        error: action.payload
      };
    }
    case 'COMMENTS_SECTION_EXPANDED': {
      return {
        ...state,
        commentsSectionExpanded: action.payload
      };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  counterReducer,
  todoReducer,
  userReducer,
  postsReducer,
  commentsReducer
});
