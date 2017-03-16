import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';

class UserDetail extends Component {

  render() {
    return (
      <ScrollView>
        <Text>AAAA</Text>
      </ScrollView>
    )
  }
}

UserDetail.defaultProps = { ...me };

export default UserDetail;
