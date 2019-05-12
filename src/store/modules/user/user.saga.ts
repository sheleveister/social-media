import { put, takeLatest, all } from 'redux-saga/effects';
import * as _ from './user.actions';
import { userData } from '../../../services/user/user.mockData';


export function* fetchUserDataSaga() {
  try {
    yield put(_.setUserData(userData));

  } catch (err) {
    console.log(err);
  }
}


export default function*() {
  yield all([
    takeLatest(_.FETCH_USER_DATA, fetchUserDataSaga),
  ])
}