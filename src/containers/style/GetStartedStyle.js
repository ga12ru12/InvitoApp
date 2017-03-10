import {  StyleSheet, Dimensions, PixelRatio } from 'react-native';
import {Fonts ,Metrics, Colors, Scale } from '../../themes/index';
const { width, height } = Dimensions.get('window');
import AppStyle from './AppStyle';

export default StyleSheet.create({
  ...AppStyle,
  inputRow:
    {
      flexDirection:'row',
      marginTop: 15,
      width: width-20,
      borderWidth: 1,
      borderColor: Colors.divider,
    },
  facebook:
    {
      justifyContent: 'center',
      height: 40,
    },
  googleplus:
    {
      justifyContent: 'center',
      height: 40,
    },
  loginWrap:
    {
      alignItems: 'center',
    },
  pwRow:
    {
      borderTopWidth: 0,
      borderWidth: 1,
      width: width-20,
      borderColor: Colors.divider,
    },
  signIn : {
    backgroundColor: 'transparent',
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2.1,
    alignSelf: 'center',
  },
  textInput: {
    height: 36,
    fontSize:Fonts.size.medium,
  },
})
