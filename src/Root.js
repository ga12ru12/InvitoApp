import React, { Component } from 'react';
import { Platform, View, Text, Navigator, StatusBar, TabBarIOS, ActivityIndicator, NetInfo } from 'react-native';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Fonts ,Metrics, Colors } from './themes/index';
import styles, {drawerStyles} from './themes/RootStyle';
import { Actions as NavActions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationRouter from './navigation/NavigationRouter';
import Tools from './services/Tools';

class Base extends Component {

  checkConnect() {
    NetInfo.isConnected.fetch().then(isConnected => {
      // console.log('First, is ' + (isConnected ? 'online' : 'offline'));
    });
    function handleFirstConnectivityChange(isConnected) {
      // console.log('Then, is ' + (isConnected ? 'online' : 'offline'));
      NetInfo.isConnected.removeEventListener(
        'change',
        handleFirstConnectivityChange
      );
    }
    NetInfo.isConnected.addEventListener(
      'change',
      handleFirstConnectivityChange
    );
  }

  componentWillReceiveProps(newProps) {
  }


  renderNotificationAlertOnForeGround () {

  }

  renderNavigator() {
    return (
      <NavigationRouter ref={(ref) => this.navigation = ref} />
    );
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='default' />
          {this.renderNavigator()}
          {this.renderNotificationAlertOnForeGround()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Base);
