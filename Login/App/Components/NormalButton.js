import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

function tranferStyle(props) {
  return {
    backgroundColor: props.backgroundColor || '#666666',
    colorText: props.colorText || 'white',
    text: props.text || 'Your title',
    width: props.width || 240
  }
}

export default function NormalButton (props) {
  let styleButton = tranferStyle(props);

  return(
    <TouchableHighlight style={[props.style,{width:props.width,alignSelf:'center'}]} underlayColor='transparent' onPress={props.onPress}>
      <View style={[styles.mainView,{backgroundColor:props.backgroundColor,width:props.width}]}>
        <Text style={[styles.text,{color:props.textColor}]}>{styleButton.text}</Text>
      </View>
    </TouchableHighlight>
  )
}
const styles = {
  mainView : {    
    alignItems: 'center',
    justifyContent:'center',
    height: 40,
    borderRadius: 5,
  },
  text : {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  }
}
