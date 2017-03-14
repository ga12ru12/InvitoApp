import { combineReducers } from 'redux';
import LoginReducer from './LoginRedux/reducer';
import UserReducer from './UserRedux/reducer';

export default combineReducers({
  login: LoginReducer,
  user: UserReducer,
});
