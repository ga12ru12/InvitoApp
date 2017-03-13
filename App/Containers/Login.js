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
import styles from './style/LoginStyle';
import NormalButton from '../Components/NormalButton';
import Actions from '../Actions/Creators';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Colors,Font} from '../Themes';
import I18n from '../I18n/I18n';
import FBSDK from 'react-native-fbsdk';
import { Actions as NavActions } from 'react-native-router-flux';
const {
  LoginButton,
  LoginManager,
} = FBSDK;
class Startup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onLogin = this.onLogin.bind(this);
    this.onLoginFB = this.onLoginFB.bind(this);
  }

  componentWillMount() {
  }

  onChange(data) {
    this.setState({...data});
  }

  onLogin () {
    const { dispatch } = this.props;
    let data = {
      username: this.state.username,
      password: this.state.password
    };
    dispatch(Actions.login(data));
  }

  onLoginFB () {
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success with permissions: '
            +result.grantedPermissions.toString());
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
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
      </View>
    );
  }

  renderButton() {
    return (
      <View>
        <NormalButton
          style= {{marginTop: 36}}
          text={I18n.t('login')}
          width= {210}
          backgroundColor='#0087FA'
          textColor='white'
          onPress={() => this.onLogin()}
        />
      </View>
    );
  }
  renderLogo () {
    return (
      <View style={styles.logoView}>
        <Image source={require('../Assets/img/Logo_enouvo_white.png')}/>
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
      <View style={styles.background}>
          {this.renderLogo()}
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

export default connect(mapStateToProps)(Startup);
