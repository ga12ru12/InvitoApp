import { StyleSheet, Dimensions } from 'react-native';
import { Fonts, Colors } from '../../themes/index';
import AppStyle from './AppStyle';

const { width } = Dimensions.get('window');

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
});
