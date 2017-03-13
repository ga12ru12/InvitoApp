import { StyleSheet, Dimensions } from 'react-native';
import { Fonts, Colors } from '../../themes/index';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    marginTop: 15,
    width: width - 20,
    borderWidth: 1,
    borderColor: Colors.divider,
  },
  facebook: {
    justifyContent: 'center',
    height: 40,
  },
  googleplus: {
    justifyContent: 'center',
    height: 40,
  },
  loginWrap: {
    alignItems: 'center',
  },
  pwRow: {
    borderTopWidth: 0,
    borderWidth: 1,
    width: width - 20,
    borderColor: Colors.divider,
  },
  signIn: {
    backgroundColor: 'transparent',
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2.1,
    alignSelf: 'center',
  },
  textInput: {
    height: 36,
    fontSize: Fonts.size.medium,
  },
});
