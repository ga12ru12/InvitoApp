import { takeLatest } from 'redux-saga';
/* ------------- Types ------------- */

import { LoginTypes } from './UserRedux/actions';

/* ------------- Sagas ------------- */

import { login } from './UserRedux/saga';

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield [
    // some sagas only receive an action
    takeLatest(LoginTypes.USER_LOGIN, login),
  ];
}
