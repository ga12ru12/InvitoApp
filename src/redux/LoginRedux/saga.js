import { put } from 'redux-saga/effects';
import UserActions from './actions';

export function* login({ username, password }) {
  if (password === '') {
    yield put(UserActions.loginFailure('WRONG'));
  } else {
    yield put(UserActions.loginSuccess({ username, password }));
  }
}
