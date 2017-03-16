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
    },
  },
});

export const ProfileStack = StackNavigator({
  Profile: {
    screen: Me,
    navigationOptions: {
      title: 'Profile',
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
  drawerComponent: DrawerComponent
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
