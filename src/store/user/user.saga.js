import { USER_ACTION_TYPES } from './user.types';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { signInSuccess, signInFailed } from './user.action';
import { getCurrentUser } from '../../utils/firebase/firebase.utils';


export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser());
    if(!userAuth) return;
    yield call(signInSuccess(userAuth));
  } catch(error) {
    yield put(signInFailed(error))
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, )
}


export function* userSagas() {
  yield all([call(onCheckUserSession)])
}