import React, { Component, PropTypes } from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './style/GetStartedStyle'
import NormalButton from '../components/NormalButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors,Font} from '../themes';
import I18n from '../i18n/I18n';
import FBSDK from 'react-native-fbsdk';
const {
  LoginButton,
  LoginManager,
  AccessToken
} = FBSDK;

class Startup extends Component {

  state = {
    username: '',
    password: '',
  }

  componentWillMount() {
  }

  onChange(data) {
    this.setState({...data});
  }

  onLogin = () => {
    let data = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(data);
  }

  onLoginFB = () => {
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
      (result) => {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success with permissions: '
            +result.grantedPermissions.toString());
        }
      },
      (error) => {
        alert('Login fail with error: ' + error);
      }
    );
    AccessToken.getCurrentToken()
  }

  onChangeUserName = (e) => {
    this.onChange( { username: e.text })
  }

  onChangePassword = (e) => {
    this.onChange( { password: e.text })
  }

  renderFacebookButton() {
    return (
      <Icon.Button style={styles.facebook} name="facebook"
        onPress={this.onLoginFB}
        backgroundColor="#3b5998">
        Sign in with Facebook
      </Icon.Button>
    );
  }

  renderLogo() {
    return (
      <Image style={styles.logo} source={require('../assets/img/Logo_enouvo_white.png')}/>
    );
  }

  renderPassword() {
    return (
        <View style={styles.loginRow}>
          <Icon style={styles.icon} name='lock' size={25}/>
            <View style={styles.textColumn}>
              <Text style={styles.textInfo}>Password</Text>
              <TextInput 
                style={styles.textInput}
                value={this.state.password}
                secureTextEntry
                placeholder={I18n.t('password')}
                onChangeText={this.onChangePassword}
              />
            </View>
        </View>
    );
  }

  renderUsername() {
    return (
        <View style={styles.loginRow}>
          <Icon style={styles.icon} name='user-o' size={25}/>
            <View style={styles.textColumn}>
              <Text style={styles.textInfo}>Name</Text>
              <TextInput 
                style={styles.textInput}
                value={this.state.username}
                placeholder={I18n.t('enterName')}
                onChangeText={this.onChangeUserName}
              />
            </View>
        </View>
    );
  }

  renderButtonSignin() {
    return (
      <NormalButton
        style= {{marginTop: 36}}
        text={I18n.t('login')}
        backgroundColor='#0087FA'
        textColor='white'
        onPress={() => this.onLogin()}
      />
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
          {this.renderLogo()}
          {this.renderUsername()}
          {this.renderPassword()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    logining: state.user.isLogin
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(Actions.login(username, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Startup);
