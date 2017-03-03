import { put, call, select } from 'redux-saga/effects';
import Types from '../Actions/Types';
import Actions from '../Actions/Creators';
import I18n, {TRANSLATIONS} from '../I18n/I18n.js';
import { Actions as NavActions } from 'react-native-router-flux';

// process STARTUP actions
export function * startup (action) {

  const { isLogged } = yield select((state) => state.user);
    NavActions.login();
}
