import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers';

const configure = (preloadedState) => createStore(
  reducers,
  preloadedState,
  composeWithDevTools(applyMiddleware(thunk)),
);

const store = configure();

export default store;
