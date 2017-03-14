import Immutable from 'seamless-immutable';
import { LoginTypes } from './../LoginRedux/actions';
import { createReducer } from '../../utils/ReduxUtils';

export const INITIAL_STATE = Immutable({
  isLogined: false,
  authData: null,
});

export const loginSuccess = (state, { response }) =>
  state.merge({ isLogined: true, authData: response });


const reducer = createReducer(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN_SUCCESS]: loginSuccess,
});

export default reducer;
