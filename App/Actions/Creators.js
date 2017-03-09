import createAction from './CreateAction';
import Types from './Types';

const startup = (data) =>
  createAction(Types.STARTUP);
const login = (data) =>
  createAction(Types.LOGIN, {data});
const register = (data) =>
  createAction(Types.REGISTER, {data});
const logout = (data) =>
  createAction(Types.LOGOUT, {data});
const updateUserSuccess = (response) =>
  createAction(Types.UPDATE_USER_SUCCESS, {response});
const updateUserFailure = (errorCode) =>
  createAction(Types.UPDATE_USER_FAILURE, {errorCode});
export default {
	startup,
	login,
  	register,
  	logout,
	updateUserSuccess,
	updateUserFailure,
};
