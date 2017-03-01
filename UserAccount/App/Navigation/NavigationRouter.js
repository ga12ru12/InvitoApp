import React, { Component } from 'react';
import { StyleSheet, View, Alert, ToastAndroid, BackAndroid  } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
// screens identified by the router

import Account from '../Containers/Account';
import styles from './style/NavigationStyle';
import {Fonts ,Metrics, Colors } from '../Themes/index'
import I18n from '../I18n/I18n';
import { connect } from 'react-redux';

const RouterWithRedux = connect()(Router);

class NavigationRouter extends Component {

  constructor (props) {
    super(props);
    this.state = {
    }
  }

  onExitApp = () => {
    Alert.alert(
      I18n.t('exitApp'),
      null,
      [
        { text: I18n.t('cancel'), onPress: () => {} },
        { text: I18n.t('yes'), onPress: () => BackAndroid.exitApp() },
      ]
    );
    return true;
  }
  render () {
    return (
      <RouterWithRedux onExitApp={this.onExitApp} hideNavBar>
        <Scene key="root" hideNavBar={true}>
          <Scene initial={true} key="account" component={Account} hideTabBar={true} hideNavBar={true}/>
                            
        </Scene>
      </RouterWithRedux>
    )
  }
}


// navBar={ (ref) => { return <NavBar left='home' right='fav-2' parrent={ref}/>}}
export default NavigationRouter
