import {StyleSheet, Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');
import {Fonts ,Metrics, Colors, Scale } from '../../themes/index';
const NavigationStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#D3D3D3'
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#373445',
  },
  navBar: {
    backgroundColor: Colors.background,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: Scale>2?74:64,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider
    // shadowColor: Colors.divider,
    // shadowOpacity: 0.6,
    // shadowRadius: 1,
    // shadowOffset: {
    //   height: 1.5,
    //   width: 0
    // },
  },
  center: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    height: 44,
    flexDirection: 'row',
  },
  navContent: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarTransparent: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderBottomWidth: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 64
  },
  left: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10,
    width: 50,
  },
  leftButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    paddingRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: 100,
  },
  text: {
    fontWeight: 'bold',
    fontSize: Fonts.size.large,
    color: Colors.orange,
  }
})
export default NavigationStyle
