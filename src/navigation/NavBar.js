import React,{ Component } from 'react'
import { TouchableHighlight, Text, Image, View, Platform } from 'react-native'
import styles from './style/NavigationStyle'
import Icon from 'react-native-vector-icons/icomoon';
import IconIonicon from 'react-native-vector-icons/Ionicons';
import {Fonts ,Metrics, Colors } from '../themes/index'
import { Actions as NavActions } from 'react-native-router-flux';
// I18n

export default class NavButton extends Component {


  componentWillMount() {
    let numbersButtonPerPosition = 1;
    numbersButtonPerPosition = this.props.left && Array.isArray(this.props.left)? this.props.left.length : 1;
    numbersButtonPerPosition = this.props.right && Array.isArray(this.props.right)? this.props.right.length : numbersButtonPerPosition;
    this.setState({numbersButtonPerPosition: numbersButtonPerPosition});
  }

  onClickLeft() {
    let left = this.props.left;
    if(!left) return;
    Array.isArray(left)?left[index].onLeft():left.onLeft();
  }

  onClickTitle(index = -1) {
    let { onTitle } = this.props.title;
    onTitle && onTitle();
  }

  onClickRight(index = -1) {
    let right = this.props.right;
    if(!right) return;
    Array.isArray(right)?right[index].onRight():right.onRight();
  }

  renderLeft() {
    let components = Array.isArray(this.props.left)? this.props.left.map((data, index) => {
      return (
        <TouchableHighlight key={index} style={{marginLeft: index == 0?0: 5}} underlayColor='transparent' style={styles.center} onPress={this.onClickLeft.bind(this, index)}>
          <View style={styles.center}>
            {data.iconIonicon && <IconIonicon name={data.iconIonicon} size={30} style={{color: data.color}} />}
            {data.icon && <Icon name={data.icon} size={35} style={{color: data.color, marginTop: data.icon == 'close'?0:10}} />}
            {data.text && <Text style={{color: data.color}}>{data.text}</Text>}
          </View>
        </TouchableHighlight>
      )
    }) : <TouchableHighlight underlayColor='transparent' style={styles.center} onPress={this.onClickLeft.bind(this)}>
          <View style={styles.center}>
            {this.props.left.iconIonicon && <IconIonicon name={this.props.left.iconIonicon} size={30} style={{color: this.props.left.color}} />}
            {this.props.left.icon && <Icon name={this.props.left.icon} size={35} style={{color: this.props.left.color, marginTop: this.props.left.icon == 'close'?0:10}} />}
            {this.props.left.text && <Text style={{color: this.props.left.color}}>{this.props.left.text}</Text>}
          </View>
        </TouchableHighlight>;
    return (
      <View style={styles.row}>{components}</View>
    );
  }

  renderTitle() {
    return (
        <TouchableHighlight underlayColor='transparent' onPress={this.onClickTitle.bind(this)}>
          <View style={styles.center}>
            {this.props.title.icon && <Icon name={this.props.title.icon} size={40} style={{color: this.props.title.color}} />}
            {this.props.title.text && <Text style={[styles.text, {color: this.props.title.color}]}>{this.props.title.text}</Text>}
          </View>
        </TouchableHighlight>
    );
  }

  renderRight() {
    let components = Array.isArray(this.props.right)? this.props.right.map((data, index) => {
      return (
        <TouchableHighlight key={index} underlayColor='transparent' style={{marginRight: index == this.props.right.length-1?0: 5}} onPress={this.onClickRight.bind(this, index)}>
          <View style={[styles.center]}>
            {data.iconIonicon && <IconIonicon name={data.iconIonicon} size={30} style={{color: data.color}} />}
            {data.icon && <Icon name={data.icon} size={35} style={{color: data.color, marginLeft: 3, marginTop: data.icon == 'close'?0:10}} />}
            {data.text && <Text style={{color: data.color}}>{data.text}</Text>}
          </View>
        </TouchableHighlight>
      )
    }) :
        <TouchableHighlight underlayColor='transparent' onPress={this.onClickRight.bind(this)}>
          <View style={[styles.center]}>
            {this.props.right.iconIonicon && <IconIonicon name={this.props.right.iconIonicon} size={30} style={{color: this.props.right.color}} />}
            {this.props.right.icon && <Icon name={this.props.right.icon} size={35} style={{color: this.props.right.color, marginLeft: 3, marginTop: this.props.right.icon == 'close'?0:10}} />}
            {this.props.right.text && <Text style={{color: this.props.right.color}}>{this.props.right.text}</Text>}
          </View>
        </TouchableHighlight>;
    return (
      <View style={styles.row}>{components}</View>
    );
  }

  render() {
    return (
      <View style={[this.props.navBarTransparent? styles.navBarTransparent: styles.navBar, styles.navBarRow]}>
        {Platform.OS !== 'android' && <View style={{height: 20}}></View>}
        <View style={[styles.navContent]}>
          <View style={[styles.left, {width: this.state.numbersButtonPerPosition*42}]}>
            {this.props.left && this.renderLeft()}
          </View>
          <View style={styles.title}>
          {this.props.title && this.renderTitle()}
          </View>
          <View style={[styles.right, {width: this.state.numbersButtonPerPosition*42}]}>
            { this.props.right && this.renderRight() }
          </View>
        </View >
      </View>
    );
  }
}
