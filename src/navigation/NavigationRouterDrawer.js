import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import ThumbNail from '../components/ThumbNail';
import Feed from '../screens/FeedScreen';
import Settings from '../screens/SettingsScreen';
import UserDetail from '../screens/UserDetailScreen';
import Me from '../screens/MeScreen';
import Login from '../screens/LoginScreen';
import Initial from '../screens/InitialScreen';
import DrawerComponent from './DrawerComponent';

const DrawerIcon = ({ onPress }) => {
  return (
    <Icon name="ios-menu" color="#000" size={35} style={{ marginLeft: 16, marginTop: 3 }} onPress={onPress} />
  );
};

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    headerMode: 'none',
    navigationOptions: {
      title: 'Feed',
      header: ({ state, setParams, navigate }) => ({
        // Render a button on the right side of the header
        // When pressed switches the screen to edit mode.
        left: (
          <DrawerIcon onPress={() => navigate('DrawerOpen')} />
        ),
      }),
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: {
      title: 'Profile',
    },
  },
});

export const ProfileStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'Profile',
      header: ({ state, setParams, navigate }) => ({
        // Render a button on the right side of the header
        // When pressed switches the screen to edit mode.
        left: (
          <DrawerIcon onPress={() => navigate('DrawerOpen')} />
        ),
      }),
    },
  },
});

export const Tabs = DrawerNavigator({
  Feed: {
    screen: FeedStack,
  },
  Profile: {
    screen: ProfileStack,
  },
},
{
  contentComponent: DrawerComponent
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
