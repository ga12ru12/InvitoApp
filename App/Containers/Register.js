import React, { Component, PropTypes } from 'react';
import {
    View, TextInput, Text,
    ListView, ScrollView,
    Dimensions, Platform,
    Keyboard, Animated,
    ActivityIndicator, Image,
    Alert, TouchableWithoutFeedback,
    TouchableHighlight,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './style/LoginStyle'
import NormalButton from '../Components/NormalButton';
import Actions from '../Actions/Creators';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Colors,Font} from '../Themes';
import I18n from '../I18n/I18n';
import { Actions as NavActions } from 'react-native-router-flux';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmpassword: '',
    };
    this.onRegister = this.onRegister.bind(this);
  }

  componentWillMount() {
  }

  onChange(data) {
    this.setState({...data});
  }

  onRegister () {
    if(this.state.username =='' || !this.state.username) {
      Alert.alert(I18n.t('username') + ' ' + 'error');
      return;
    }

    if(this.state.confirmpassword != this.state.password) {
      console.log(this.state.password+this.state.confirmPassword)
      Alert.alert(I18n.t('confirmPassword')+ ' ' + I18n.t('error'));
      return;
    }

    if(this.state.password == '' || !this.state.password) {
      Alert.alert(I18n.t('password') + ' ' + I18n.t('error'));
      return;
    }
    let objectRequest = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.dispatch(Actions.register(objectRequest));
  }

  renderSocialButton() {
     return (
      <View>
        <Icon.Button style={styles.facebook} name="facebook" backgroundColor="#3b5998">
          Facebook
        </Icon.Button>

        <Icon.Button style={styles.googleplus} name="google-plus" backgroundColor="#E04C42">
          Google+
        </Icon.Button>
      </View>
      );
  }

  renderSignin() {
    return (
      <View style={styles.loginWrap}>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.textInput}
            placeholder={I18n.t('username')}
            value={ this.state.username || '' }
            onChangeText={ (data) =>  this.onChange( { username: data }) }
          />
        </View>
        <View style={styles.pwRow}>
          <TextInput
            secureTextEntry
            style={styles.textInput}
            placeholder={I18n.t('password')}
            value={ this.state.password || '' }
            onChangeText={ (data) => this.onChange( { password: data }) }
          />
        </View>
        <View style={styles.pwRow}>
          <TextInput
            secureTextEntry
            style={styles.textInput}
            placeholder={'Confirm Password'}
            value={ this.state.confirmpassword || '' }
            onChangeText={ (data) => this.onChange( { confirmpassword: data }) }
          />
        </View>
      </View>
    );
  }

  renderButton() {
    return (
      <View>
        <NormalButton
          style= {{marginTop: 36}}
          text={'Register'}
          width= {210}
          backgroundColor='#0087FA'
          textColor='white'
          onPress={() => this.onRegister()}
        />
      </View>
    );
  }

  renderActivityIndicator () {
    return (
      <ActivityIndicator
         animating={true}
         style={styles.indicator}
         size="large"
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
            {this.renderSocialButton()}
            {this.renderSignin()}
            {this.renderButton()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    logining: state.user.isLogin
  };
}

export default connect(mapStateToProps)(Register);
