import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Root } from './navigation/NavigationRouterDrawer';

class Base extends Component {

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
