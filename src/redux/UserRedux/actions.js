import { createAction } from '../../utils/ReduxUtils';

export const LoginTypes = {
  USER_LOGIN: 'USER_LOGIN',
  USER_REGISTER: 'USER_REGISTER',
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
};

const login = (username, password) => createAction(LoginTypes.USER_LOGIN, { username, password });
const loginSuccess = response => createAction(LoginTypes.USER_LOGIN_SUCCESS, { response });
const loginFailure = err => createAction(LoginTypes.USER_LOGIN_FAILURE, { err });

export default {
  login,
  loginSuccess,
  loginFailure,
};
