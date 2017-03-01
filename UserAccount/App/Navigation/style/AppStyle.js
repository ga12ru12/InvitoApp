import {  StyleSheet, Dimensions, PixelRatio } from 'react-native';
import {Fonts ,Metrics, Colors, Scale } from '../../Themes/index';
const { width, height } = Dimensions.get('window');
const _MARGIN = 40;
export default {
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  indicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    
  },
  button: {
    borderRadius: 5,
    backgroundColor:'#00B4FB',
    width:131,
    height:40,
  },
  buttonView: {
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText : {
    fontSize : 16,
    fontWeight : 'normal',
    color: 'white'
  },
  nameLocation: {
    alignItems:'center',
    marginTop: 100,
  },
  appName: {
    fontSize:32,
    fontFamily: Fonts.type.bold,
    letterSpacing:3,
    color: '#3d3d3d',
    alignItems:'center',
    backgroundColor:'transparent'
  },
}
