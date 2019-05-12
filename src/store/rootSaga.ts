import { all } from 'redux-saga/effects';
import watchUser from './modules/user/user.saga';

export default function* rootSaga() {
  yield all([
    watchUser(),
  ]);
}
