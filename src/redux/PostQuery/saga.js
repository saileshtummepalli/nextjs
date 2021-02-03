import { call, put } from "redux-saga/effects";
import { createdata } from "../../../services/Postdata";

import * as actions from "./actions";

export function* createDataSaga({ data }) {
  try {
    const {
      data: { data },
    } = yield call(createdata, { data });
    yield put(
      actions.createDataSaga({
        data: data,
      })
    );
  } catch (error) {
    yield put(actions.failure(error.message));
  }
}
export default createDataSaga
