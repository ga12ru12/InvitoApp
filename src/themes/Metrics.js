import { Dimensions, PixelRatio, Platform } from 'react-native';

// Used via Metrics.baseMargin
const metrics = {
  borderWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
  buttonPadding: 6,
  borderRadiusBase: (Platform.OS === 'ios') ? 5 : 2,
  fontSizeBase: 15,
  borderRadiusLarge: 15 * 3.8,
};

export default metrics;
