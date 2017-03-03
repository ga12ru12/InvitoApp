import { takeLatest } from 'redux-saga';
import { startup } from './StartupSaga';
import { login, logout,editUser, register } from './LoginSaga';
import Types from '../Actions/Types';
export default function * root () {
  yield [
  	takeLatest(Types.STARTUP, startup),
    takeLatest(Types.LOGIN, login),
    takeLatest(Types.LOGOUT, logout),
    takeLatest(Types.REGISTER, register),
  ]
}
