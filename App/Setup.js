import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RootContainer from './Root';
import configureStore from './Store/Store';
import DebugSettings from './Config/DebugSettings';
import { View, ActivityIndicator, Text } from 'react-native'

if (__DEV__) {
  // If ReactNative's yellow box warnings are too much, it is possible to turn
  // it off, but the healthier approach is to fix the warnings.  =)
  console.disableYellowBox = DebugSettings.yellowBox
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({isLoading: false})),
    };
  }

  render () {
    if (this.state.isLoading) {
      return <View style={{flex: 1}} />;
    }
    return (
      <Provider store={this.state.store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default App
