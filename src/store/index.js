import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const index = createStore(
  rootReducer,
  initialState,
      composeWithDevTools(applyMiddleware(thunk))
);

export default index;
