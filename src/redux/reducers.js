import { combineReducers } from 'redux';
import UserReducer from './UserRedux/reducer';

export default combineReducers({
  user: UserReducer,
});
