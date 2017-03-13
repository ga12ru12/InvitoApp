import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import styles from './themes/ApplicationStyle';
import NavigationRouter from './navigation/NavigationRouter';

class Base extends Component {

  componentWillMount() {

  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="default" />
        <NavigationRouter />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
  };
};

export default connect(mapStateToProps)(Base);
