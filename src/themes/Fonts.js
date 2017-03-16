import { Platform } from 'react-native';

const fontFamily = (Platform.OS === 'ios') ? 'Avenir' : 'Roboto';
const fontSizeBase = 15;

const size = {
  base: fontSizeBase,
  h1: fontSizeBase * 1.8,
  h2: fontSizeBase * 1.6,
  h3: fontSizeBase * 1.4,
  title: 17,
  subtitle: 12,
};

export default {
  fontFamily,
  size,
};
