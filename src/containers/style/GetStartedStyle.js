import {  StyleSheet, Dimensions, PixelRatio } from 'react-native';
import {Fonts ,Metrics, Colors, Scale } from '../../themes/index';
const { width, height } = Dimensions.get('window');
import AppStyle from './AppStyle';

export default StyleSheet.create({
  ...AppStyle,
  logo:
    {
      alignSelf: 'center',
    },
  loginRow:
    { 
      flexDirection: 'row',
      flex: 1,
      padding: 20,
    },
  icon:
    {
      marginTop: 10,
      color: Colors.default,
    },
  textColumn:
    {
      flex: 1,
    },
  textInfo: 
    {
      marginLeft: 20,
      color: Colors.default,
      fontSize: Fonts.size.large,
    },
  textInput: 
    {
      marginLeft: 20,
      height: 36,
      color: Colors.default,
      fontSize: Fonts.size.large,
    },
})
