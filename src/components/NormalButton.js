import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

export default function NormalButton(props) {
  return (
    <TouchableHighlight
      style={{ width: props.width, alignSelf: 'center' }}
      underlayColor={'transparent'} onPress={props.onPress}
    >
      <View
        style={[styles.mainView, { backgroundColor: props.backgroundColor, width: props.width }]}
      >
        <Text style={[styles.text, { color: props.textColor }]}>{props.text || 'Login in' }</Text>
      </View>
    </TouchableHighlight>);
}

NormalButton.propTypes = {
  width: React.PropTypes.number.isRequired,
  backgroundColor: React.PropTypes.string.isRequired,
  textColor: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
