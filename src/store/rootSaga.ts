import { all } from "redux-saga/effects";

import moviesSaga from "./movies/saga";

export default function* rootSaga() {
  yield all([...moviesSaga]);
}
