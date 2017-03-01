/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { Platform, View, Text, Navigator, StatusBar, TabBarIOS, ActivityIndicator, NetInfo } from 'react-native';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Styles
import {Fonts ,Metrics, Colors } from './Themes/index';
import styles, {drawerStyles} from './Themes/RootStyle';
//Components
import { Actions as NavActions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationRouter from './Navigation/NavigationRouter';
//action
import Actions from './Actions/Creators';
//Store
import Tools from './Services/Tools';


class angigio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigator: {},
      drawer: {},
    };
  }

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

  componentDidMount () {
    this.checkConnect();
    this.props.dispatch(Actions.startup());
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

export default connect(mapStateToProps)(angigio);
