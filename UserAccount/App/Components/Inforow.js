import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Fonts ,Metrics, Colors, Scale } from '../Themes/index';

export default class Inforow extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={ styles.row}>
        <Icon style={styles.icon} name={this.props.icon} size={25}/>
        <TextInput
          style={ styles.textInput }
          value={ this.props.value }
          onChange={ (event) => this.props.onChangeText && this.props.onChangeText(event.nativeEvent.text) }
        />
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
  textInput: {
    backgroundColor: 'transparent',
    height: 40,
    marginLeft: 25,
    width: (width-70),
    fontSize:Fonts.size.medium,
 },
  icon: {
    marginLeft: 15,
  },
  content: {
    marginLeft: 25,
    color: Colors.lightGray,
  },
});
