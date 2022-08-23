import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/reducer';
import { useDispatch } from 'react-redux';
import { LOAD_POSTS } from '../action-types/posts.action-type';

export const logger =
  ({ getState }) =>
  (next) =>
  (action) => {
    const currentStoreState = getState();
    console.log(currentStoreState, action);

    next(action);
  };

export const trackPostsLoading =
  ({ getState }) =>
  (next) =>
  (action) => {
    const currentStoreState = getState();

    if (action.type === LOAD_POSTS) {
      localStorage.setItem('postsLoadDate', `${Date.now()}`);
    }
    next(action);
  };

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger, trackPostsLoading))

  // other store enhancers if any
);
