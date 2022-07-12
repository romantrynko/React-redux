import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {  rootReducer } from '../reducers/reducer';

export const store = createStore(
  rootReducer,
  composeWithDevTools()
  // applyMiddleware(...middleware)
  // other store enhancers if any
);





