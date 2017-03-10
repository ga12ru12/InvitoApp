import immutablePersistenceTransform from '../services/ImmutablePersistenceTransform'
import { AsyncStorage } from 'react-native'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '2',
  storeConfig: {
    storage: AsyncStorage,
    whiteList: ['user'],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
