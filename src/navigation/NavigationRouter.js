import React, { Component } from 'react';
import { Alert, BackAndroid } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
// screens identified by the router
import Login from '../containers/Login';
import Register from '../containers/Register';
import I18n from '../i18n/I18n';

class NavigationRouter extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onExitApp = () => {
    Alert.alert(
      I18n.t('exitApp'),
      null,
      [
        { text: I18n.t('cancel'), onPress: () => {} },
        { text: I18n.t('yes'), onPress: () => BackAndroid.exitApp() },
      ],
    );
    return true;
  }

  render() {
    return (
      <Router onExitApp={this.onExitApp} hideNavBar>
        <Scene key="root" hideNavBar>
          <Scene initial key="login" component={Login} />
          <Scene key="register" component={Register} />
        </Scene>
      </Router>
    );
  }
}

export default NavigationRouter;
