import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet, Dimensions, TextInput } from 'react-native';
import { Colors } from '../themes';
import { SubTitle } from './Text';

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
    padding: 20,
  },
  icon: {
    marginTop: 5,
    marginRight: 20,
    color: Colors.default,
  },
  textInfo: {
    marginLeft: 20,
    color: Colors.default,
  },
  textInput: {
    height: 36,
    width,
    color: Colors.default,
  },
});

export default Input;
