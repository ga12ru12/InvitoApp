import { AsyncStorage } from 'react-native';
import immutablePersistenceTransform from '../utils/ImmutablePersistenceTransform';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '2',
  storeConfig: {
    storage: AsyncStorage,
    whiteList: ['user'],
    transforms: [immutablePersistenceTransform],
  },
};

export default REDUX_PERSIST;
