import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

class InitialScreen extends Component {

  componentWillMount() {
    if (this.props.isLogined) {
      this.reset('Tabs');
    } else {
      this.reset('Login');
    }
  }

  reset = (route) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: route }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View />
    );
  }
}

InitialScreen.PropTypes = {
  navigation: React.PropTypes.object,
  isLogined: React.PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    isLogined: state.user.isLogined,
  };
}

export default connect(mapStateToProps)(InitialScreen);
