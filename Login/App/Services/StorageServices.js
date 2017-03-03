import { AsyncStorage } from 'react-native';
import config from '../Config/AppSetting';

const saveStorage = (name, value) => {
  return AsyncStorage.setItem(name, JSON.stringify(value));
}

const getStorage = (name , act) => {
  return AsyncStorage.getItem(name); 
}
export {
	saveStorage,
	getStorage
};
