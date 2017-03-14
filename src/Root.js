import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import styles from './themes/ApplicationStyle';
import { Root } from './navigation/NavigationRouter';

class Base extends Component {

  componentWillMount() {

  }

  render() {
    return (
      <Root />
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Base);
