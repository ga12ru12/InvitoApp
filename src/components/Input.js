import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet, Dimensions, TextInput, Text } from 'react-native';
import { Colors, Fonts } from '../themes';
import I18n from '../i18n/I18n';

const { width } = Dimensions.get('window');
const Input = (props) => {
  return (
    <View style={styles.loginRow}>
      <Icon style={styles.icon} name="user-o" size={25} />
      <View style={styles.textColumn}>
        <Text style={styles.textInfo}>{props.type}</Text>
        <TextInput
          style={styles.textInput}
          {...props}
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
    marginTop: 10,
    color: Colors.default,
  },
  textInfo: {
    marginLeft: 20,
    color: Colors.default,
    fontSize: Fonts.size.meidum,
  },
  textInput: {
    marginLeft: 20,
    height: 36,
    width,
    color: Colors.default,
    fontSize: Fonts.size.medium,
  },
});

export default Input;
