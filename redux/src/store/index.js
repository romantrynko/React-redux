import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer } from '../reducers/count.reducer';

export const store = createStore(
  counterReducer,
  composeWithDevTools()
  // applyMiddleware(...middleware)
  // other store enhancers if any
);





