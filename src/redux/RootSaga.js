import { call, all, takeEvery,takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../redux/GetPosts/actions'
import {postActionTypes} from "../redux/PostQuery/actions"
import loadDataSaga from "../redux/GetPosts/saga"
import createDataSaga from "../redux/PostQuery/saga"
function* rootSaga() {
    yield all([
      takeLatest(postActionTypes.CREATE_DATA_SUCCESS ,createDataSaga)
    ])
    
  }
  
export default rootSaga
