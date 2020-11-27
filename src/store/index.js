import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import thunk from "redux-thunk";
import rootReducer from "./rootReducers";
import rootSaga from "./rootSaga";

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const index = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default index;
