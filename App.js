import React from 'react'
import { Provider } from 'react-redux'
import Home from './src/components/home';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './src/reducers/indexReducer'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk,logger)
)

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);