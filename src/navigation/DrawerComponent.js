import React from 'react';
import { Button, Image, View, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import Touchable from '../components/Touchable';
import { Text, H3, SubTitle } from '../components/Text';
import Divider from '../components/Divider';
import ThumbNail from '../components/ThumbNail';

const DrawerRow = (props) => {
  return (
    <Touchable onPress={props.onPress}>
      <View style={styles.row}>
        <Icon name={props.iconName} color={props.isSelecting ? 'red' : "#86939e"} size={30} style={styles.marginRight} />
        <Text color={props.isSelecting && 'red'}>{props.label}</Text>
      </View>
    </Touchable>
  );
};

function navigateScreen(navigation, screen) {
  const { navigate, state } = navigation;
  if (state.routes[state.index].routeName !== screen) {
    navigate(screen);
  } else {
    navigate('DrawerClose');
  }
}

class DrawerView extends React.Component {
  render() {
    const { navigation } = this.props;
    const currentScreen = navigation.state.routes[navigation.state.index].routeName;
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <ThumbNail source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
          <View style={styles.margin}>
            <H3>Janet Valdez</H3>
            <SubTitle>Jagasg@gmail.com</SubTitle>
          </View>
        </View>
        <Divider style={styles.serperator} />
        <DrawerRow
          isSelecting={currentScreen === 'Feed'}
          onPress={() => navigateScreen(navigation, 'Feed')}
          label="Home"
          iconName="ios-home-outline"
        />
        <DrawerRow
          isSelecting={currentScreen === 'Profile'}
          onPress={() => navigateScreen(navigation, 'Profile')}
          label="Profile"
          iconName="ios-contact-outline"
        />
        <Divider style={styles.serperator} />
        <DrawerRow
          label="Setting"
          iconName="ios-settings-outline"
        />
        <DrawerRow
          label="Logout"
          iconName="ios-exit-outline"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    paddingHorizontal: 18,
  },
  margin: {
    marginLeft: 20,
  },
  marginRight: {
    marginRight: 25,
  },
  serperator: {
    marginVertical: 15,
  },
  row: {
    height: 48,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

function mapStateToProps(state) {
  return {
    isLogined: state.user.isLogined,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerView);
