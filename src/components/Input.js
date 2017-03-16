import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Colors } from '../themes';
import { normalize, SubTitle } from './Text';
import fonts from '../themes/Fonts';

const { width } = Dimensions.get('window');
const Input = (props) => {
  return (
    <View style={styles.loginRow}>
      {props.icon && <Icon style={styles.icon} name={props.icon} size={30} />}
      <View style={styles.textColumn}>
        <SubTitle color={props.labelColor}>{props.type}</SubTitle>
        <TextInput
          {...props}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

Input.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const styles = StyleSheet.create({
  loginRow: {
    flexDirection: 'row',
    paddingVertical: 7,
  },
  icon: {
    marginTop: 5,
    marginRight: 20,
    color: Colors.default,
  },
  textInput: {
    height: 40,
    width,
    fontSize: normalize(17),
    fontFamily: fonts.fontFamily,
    color: '#43484d',
  },
});

export default Input;
