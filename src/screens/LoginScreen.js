import React, { Component } from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import FBSDK from 'react-native-fbsdk';
import styles from './style/LoginStyle';
import InputRow from '../components/Input';
import { Images } from '../themes';
import I18n from '../i18n/I18n';

const {
  LoginManager,
} = FBSDK;

class Startup extends Component {

  state = {
    username: '',
    password: '',
  }

  componentWillMount() {
  }

  onChange(data) {
    this.setState({ ...data });
  }

  onLogin = () => {
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    this.props.login(data);
  }

  onLoginFB = () => {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      (result) => {
        if (result.isCancelled) {
          console.log('cancelled')
        } else {
          console.log('success')
        }
      },
      (error) => {
        console.log('Login fail with error: ' + error);
      },
    );
    AccessToken.getCurrentToken()
  }

  onChangeUserName = (e) => {
    this.onChange({ username: e.text });
  }

  onChangePassword = (e) => {
    this.onChange({ password: e.text });
  }

  renderPassword() {
    return (
      <InputRow
        type="PASSWORD"
        sectureTextEntry
        value={this.state.password}
        placeholder={I18n.t('password')}
        onChangeText={this.onChangePassword}
      />
    );
  }

  renderUsername() {
    return (
      <InputRow
        type="NAME"
        value={this.state.username}
        placeholder={I18n.t('enterName')}
        onChangeText={this.onChangeUserName}
      />
    );
  }

  renderSigninButton() {
    return (
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.textSignin}>
          {I18n.t('signin')}
        </Text>
      </TouchableOpacity>
    );
  }

  renderLoginFB() {
   return (
     <TouchableOpacity style={styles.loginButton}>
       <Text style={styles.textSignin}>
         {I18n.t('loginFB')}
       </Text>
     </TouchableOpacity>
   );
  }

  renderSignupButton() {
    return (
      <View style={styles.sigunUpLine}>
        <Text style={styles.signupText}>
          {I18n.t('noAccount')}
        </Text>
        <TouchableOpacity>
          <Text style={styles.signup}> {I18n.t('signUp')}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={Images.logo} />
        {this.renderUsername()}
        {this.renderPassword()}
        {this.renderSigninButton()}
        {this.renderSignupButton()}
        {this.renderLoginFB()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    logining: state.user.isLogin,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(Actions.login(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Startup);
