import Immutable from 'seamless-immutable';
import { LoginTypes } from './actions';
import { createReducer } from '../../utils/ReduxUtils';

export const INITIAL_STATE = Immutable({
  username: '',
  password: '',
});

export const login = (state, { username }) =>
  state.merge({ fetching: true, username, avatar: null });

const reducer = createReducer(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: login,
});

export default reducer;
