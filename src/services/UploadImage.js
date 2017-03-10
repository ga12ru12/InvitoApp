import RNFetchBlob from 'react-native-fetch-blob'
import config, {timeoutDef} from '../config/AppSetting';

export default async function uploadImage (uri) {
  let response = await RNFetchBlob.fetch('POST', config.URL+'/1/files/picture.png', {
    'X-Parse-Application-Id': config.PARSE_ID,
    'X-Parse-REST-API-Key': config.PARSE_API_KEY,
    'Content-Type': 'image/png'
  }, RNFetchBlob.wrap(uri));
  return response.json();
}
