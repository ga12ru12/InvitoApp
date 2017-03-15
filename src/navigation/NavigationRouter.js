import React from 'react';
import { Button } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Feed from '../screens/FeedScreen';
import Settings from '../screens/SettingsScreen';
import UserDetail from '../screens/UserDetailScreen';
import Me from '../screens/MeScreen';
import Login from '../screens/LoginScreen';
import Initial from '../screens/InitialScreen';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    headerMode: 'none',
    navigationOptions: {
      title: 'Feed',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: {
      title: 'Profile',

      header: ({ dispatch }) => ({
        // Render a button on the right side of the header
        // When pressed switches the screen to edit mode.
        right: (
          <Button
            title="Edit"
            onPress={() =>console.log(dispatch)}
          />
        ),
      }),
    },
  },
});

export const Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBar: {
        label: 'Feed',
        icon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor} />,
      },
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBar: {
        label: 'Me',
        icon: ({ tintColor }) => <Icon name="ios-person" size={35} color={tintColor} />,
      },
    },
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Initial: {
    screen: Initial,
  },
  Login: {
    screen: Login,
  },
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
