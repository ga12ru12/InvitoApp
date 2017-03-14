import Immutable from 'seamless-immutable';
import { LoginTypes } from './actions';
import { createReducer } from '../../utils/ReduxUtils';

export const INITIAL_STATE = Immutable({
  username: '',
  password: '',
  loading: false,
  error: null,
  dataAuth: null,
});

export const login = (state, { username }) =>
  state.merge({ loading: true, username });

export const loginSuccess = (state, { response }) =>
  state.merge({ loading: false, dataAuth: response });

export const loginFailure = (state, { err }) =>
  state.merge({ loading: false, error: err });


const reducer = createReducer(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: login,
  [LoginTypes.USER_LOGIN_SUCCESS]: loginSuccess,
  [LoginTypes.USER_LOGIN_FAILURE]: loginFailure,
});

export default reducer;
