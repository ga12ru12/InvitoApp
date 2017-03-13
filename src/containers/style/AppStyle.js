import {  StyleSheet, Dimensions, PixelRatio } from 'react-native';
import {Fonts ,Metrics, Colors, Scale } from '../../themes/index';
const { width, height } = Dimensions.get('window');
export default {
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  
}
