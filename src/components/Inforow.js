import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import {Fonts ,Metrics, Colors, Scale } from '../Themes/index';

export default class Inforow extends Component {

  state = {

  }

  render() {
    return (
      <View style={ styles.row}>
        <Text style={styles.content}>
          { this.props.content }
        </Text>
      </View>
    );
  }

}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  row: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: width,
    padding: 10,
  },
  icon: {
    marginLeft: 15,
  },
  content: {
    marginLeft: 25,
    color: Colors.lightGray,
  },
});
