import { StyleSheet, Dimensions } from 'react-native';
import { Fonts, Colors } from '../../themes/index';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    position: 'absolute',
    height,
    width,
  },
  logo: {
    marginTop: 40,
    alignSelf: 'center',
  },
  loginButton: {
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: width - 80,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: Colors.default,
  },
  textSignin: {
    fontSize: Fonts.size.large,
    color: Colors.default,
  },
  signupText: {
    alignSelf: 'center',
    marginTop: 30,
    color: Colors.default,
    opacity: 0.8,
  },
  sigunUpLine: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signup: {
    marginTop: 30,
    color: Colors.default,
  },
});
