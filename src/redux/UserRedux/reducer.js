import { Types } from './actions';
import createReducer from '../createReducer';
import Immutable from 'seamless-immutable';

export const INITIAL_STATE = Immutable({
  username: '',
  password: ''
})
export const login = (state, { username }) =>
  state.merge({ fetching: true, username, avatar: null })

const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_LOGIN]: login
})

export default reducer;
