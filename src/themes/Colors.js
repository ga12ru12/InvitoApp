import { Platform } from 'react-native';

const colors = {
  primary: (Platform.OS === 'ios') ? '#007aff' : '#3F51B5',
  info: '#62B1F6',
  success: '#5cb85c',
  danger: '#d9534f',
  warning: '#f0ad4e',
  background: '#50D2C2',
  default: '#ffffff',
  actionText: '#3FB4CF',
  inactiveText: '#9B9B9B',
  darkText: '#032250',
  lightText: '#7F91A7',
  cellBorder: '#EEEEEE',
  darkBackground: '#183E63',
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  cardBorderColor: '#ccc',
  cardDefaultBg: '#fff',
};

export default colors;
