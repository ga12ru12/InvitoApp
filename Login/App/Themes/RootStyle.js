import {StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
import {Fonts, Metrics, Colors, Scale} from './index';

// For some reason this doesn't want ot be a stylesheet
export const drawerStyles = {
  drawer: {shadowColor: Colors.navigator, shadowOpacity: 0.8, shadowRadius: 3, backgroundColor: Colors.navigator},
  item: {
    backgroundColor: 'transparent'
  },
  textStyle: {
    color: Colors.secondaryText,
    color: Colors.secondaryText,
    fontSize:Fonts.size.h6,
    fontFamily: Fonts.type.base,

  },
  containerItem: {
    position:'absolute',
    top:20,
    bottom:0,
    right:0,
    left:0,

  }, 
  texStyle: {
    color: Colors.secondaryText,
    fontSize:15,
  },
  iconStyle: {
    color:Colors.secondaryText,
        marginTop:4,
  }, 
  button: {
    marginTop: 10*Scale,
    height:48*Scale,
  },
  appName: {
    fontSize:Fonts.size.h3,
    fontFamily: Fonts.type.bold,
    letterSpacing:3,
    color: Colors.orange,
    marginTop:10,
    alignSelf:'center',
    backgroundColor:'transparent'
  },
    logo:{
    marginTop:10,
    alignSelf:'center'
  },
};

const RootStyle = StyleSheet.create({
  applicationView: {
    flex: 1,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: height,
    opacity: 0.5,
    zIndex: 999,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },

  drawer: {
    shadowColor: '#ffffff',
    shadowOpacity: 0.8,
    shadowRadius: 3
  }, 
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.base,
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
});

export default RootStyle;
