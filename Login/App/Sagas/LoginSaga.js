import { take, put, call, select } from 'redux-saga/effects'
import Types from '../Actions/Types'
import Actions from '../Actions/Creators'
import config from '../Config/AppSetting';
import Api from '../Services/ParseApi';
import { Actions as NavActions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import I18n from '../I18n/I18n';

export function * login ({data}) {
  try {
    const ParseApi = new Api(null);
    const response = yield call([ParseApi, ParseApi.login], data);
    if (response && response.error) {
      yield put(Actions.updateUserFailure(response));
      Alert.alert('Wrong usename or password')
    }
    else {
      yield put(Actions.updateUserSuccess(response));
      NavActions.register();
    }
  } catch(error) {
    yield put(Actions.updateUserFailure(error));
  }

}

export function * logout ({data}) {
  try {
    const { sessionToken } = yield select((state) => state.user.data);
    const ParseApi = new Api(sessionToken);
    const response = yield call([ParseApi, ParseApi.logout], data);
    if (response && response.error) {
      yield put(Actions.updateUserFailure(response));
    }
    else 
      yield put(Actions.clearPushNotification());
  } catch(error) {
    yield put(Actions.updateUserFailure(error));
  }

}
export function * register ({data}) {
  try {
    const ParseApi = new Api(null);
    const response = yield call([ParseApi, ParseApi.signup], data);

    if (response && response.error) {
      Alert.alert('error');
      yield put(Actions.updateUserFailure(response));
    }
    else
      console.log('register success')
  } catch(error) {
    yield put(Actions.updateUserFailure(error));
  }

}
export function * editUser ({data}) {  
  try {  
    const { objectId, sessionToken } = yield select((state) => state.user.data);
    const ParseApi = new Api(sessionToken);
    const response = yield call([ParseApi, ParseApi.updateUser], objectId, data);
    if (response && response.error) {
      yield put(Actions.updateUserFailure(response));
      Alert.alert(I18n.t('connectErr'));
    }
    else
      yield put(Actions.updateUserSuccess(data));
  } catch(error) {
    yield put(Actions.updateUserFailure(error));
  }
}