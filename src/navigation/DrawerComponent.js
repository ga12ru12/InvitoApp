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
        <Icon name={props.iconName} color="#86939e" size={30} style={styles.marginRight} />
        <Text>{props.label}</Text>
      </View>
    </Touchable>
  );
};

class DrawerView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <ThumbNail source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
          <View style={styles.margin}>
            <H3 style={{ marginBottom: 2 }}>Janet Valdez</H3>
            <SubTitle>Jagasg@gmail.com</SubTitle>
          </View>
        </View>
        <Divider style={styles.serperator} />
        <DrawerRow
          onPress={() => this.props.navigation.navigate("Profile")}
          label="Home"
          iconName="ios-home-outline"
        />
        <DrawerRow
          label="Calender"
          iconName="ios-home-outline"
        />
        <DrawerRow
          label="OverView"
          iconName="ios-home-outline"
        />
        <DrawerRow
          label="Groups"
          iconName="ios-home-outline"
        />
        <DrawerRow
          label="Lists"
          iconName="ios-home-outline"
        />
        <Divider style={styles.serperator} />
        <DrawerRow
          label="Setting"
          iconName="ios-home-outline"
        />
        <DrawerRow
          label="Logout"
          iconName="ios-home-outline"
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
