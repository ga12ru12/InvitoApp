import createAction from '../createAction';

export const Types = {
  USER_LOGIN: 'USER_LOGIN',
  USER_REGISTER: 'USER_REGISTER'
}

export const login = (username, password) => createAction(Types.USER_LOGIN, {username, password});
