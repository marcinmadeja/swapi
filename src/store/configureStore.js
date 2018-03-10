import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers';

const composeEnhancers = composeWithDevTools({});

const configureStore = preloadedState => createStore(
  reducers,
  preloadedState,
  composeEnhancers(applyMiddleware(
    thunk,
  )),
);

export default configureStore;
