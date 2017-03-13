import {  StyleSheet, Dimensions, PixelRatio } from 'react-native';
import {Fonts ,Metrics, Colors, Scale } from '../../Themes/index';
const { width, height } = Dimensions.get('window');
import AppStyle from './AppStyle';
export default StyleSheet.create({
  ...AppStyle,
  background:
    {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: Colors.seafoamBlue,
    },
  logoView:
    {
      marginTop: 50,
      alignSelf: 'center',
    },
  inputRow: 
    {
      flexDirection:'row',
      marginTop: 15,
      width: width-20,
      borderWidth: 1,
      borderColor: Colors.divider,
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
    backgroundColor: 'transparent',
    height: 40,
    width: (width-70),
    marginLeft: 10,
    fontSize:Fonts.size.medium,
  },
})
