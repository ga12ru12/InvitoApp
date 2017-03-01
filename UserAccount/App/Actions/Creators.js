import createAction from './CreateAction';
import Types from './Types';

const startup = (data) =>
  createAction(Types.STARTUP);


export default {
	startup,
	
};
