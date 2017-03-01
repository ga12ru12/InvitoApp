import Colors from '../Themes/Colors';
import Icons from '../Themes/Icons';
import I18n from '../I18n/I18n';

export default config = {
	PARSE_ID:'63psQ0dZvBEkzwAGOYlE6Sq6BuvGWdk2mxqqxwVN',
  PARSE_API_KEY: '3TF1eVmZPxxFe9R6iQvA1lS5ZfOGo9udod6q8ipz',
  
  // PARSE_ID: __DEV__? '63psQ0dZvBEkzwAGOYlE6Sq6BuvGWdk2mxqqxwVN' :'nDkEwADDyJNFu4FCIU3oR5yBSrV2qiX6sYxZTkEg',
  // PARSE_API_KEY: __DEV__ ? '3TF1eVmZPxxFe9R6iQvA1lS5ZfOGo9udod6q8ipz' : 'K9EhWpKwyO92YZePmD9tTVhlhiOi4Fyhfb0TVqB6',
  
  URL: 'http://server.enouvo.com:8844',
  GSM_SENDER_ID: '748316760683'
};

export const TYPE_REPORT = ['daily', 'weekly', 'monthly'];
export const TYPE_CUSTOM_REPORT = ['day', 'week', 'month', 'custom'];
export const TYPE_POINT = ['verypoor', 'poor', 'average', 'good', 'excellent'];
export const REVIEW_COLOR = ['#FF7F60','#D4D4D4','#72D8C0','#97E9FF','#FFC0DD'];
export const REVIEW_IMAGE = [require('../Assets/img/emoji_verypoor.gif'),require('../Assets/img/emoji_poor.gif'),require('../Assets/img/emoji_average.gif'),require('../Assets/img/emoji_good.gif'),require('../Assets/img/emoji_excellent.gif')]