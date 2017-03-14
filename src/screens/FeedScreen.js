import React, { Component } from 'react';
import {
  ScrollView,
  InteractionManager,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';

class Feed extends Component {
  onLearnMore = (user) => {
    InteractionManager.runAfterInteractions(() => {
      // ...long-running synchronous task...
      this.props.navigation.navigate('Details', { ...user });
    });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {users.map(user => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

Feed.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};

export default Feed;
