import React, { Component } from 'react';
import { ScrollView, View, Switch, StyleSheet, Button } from 'react-native';
import { SubTitle, Text } from '../components/Text';
import Avatar from '../components/Avatar';
import InputRow from '../components/Input';
import Divider from '../components/Divider';
import I18n from '../i18n/I18n';
import { DrawerIcon } from '../navigation/NavigationRouterDrawer';

function renderLeft(state) {
  const { editing } = state.params || false;
  return (
    <Button
      title={editing ? 'Done' : 'Edit'}
      onPress={() => state.params.handleSave()}
    />
  );
}

class UserDetail extends Component {

  static navigationOptions = {
    title: (navigation) => {
      return "Profile";
    },
    header: ({ state, navigate }) => ({
  // Render a button on the right side of the header
  // When pressed switches the screen to edit mode.
      left: <DrawerIcon onPress={() => navigate('DrawerOpen')} />,
      right: renderLeft(state),
    }),
  };

  constructor(props) {
    super(props);
    this.state = {
      fullName: 'Trang tran',
      email: 'trang.tran@enouvo.com',
      password: 'abc123',
      gender: false,
      haveNotification: false
    }
  }

  componentWillMount() {
    this.props.navigation.setParams({ editing: false, handleSave: this.saveProfile });
  }

  saveProfile = () => {
    this.props.navigation.setParams({
        editing: !this.props.navigation.state.params.editing,
    });
    //Handle save here
  }

  changeField = (field, value) => {
    this.setState({ [field]: value });
  }

  render() {
    const { editing } = this.props.navigation.state.params || false;
    return (
      <ScrollView style={styles.container}>
        <Avatar
          disabled={!editing}
          value={null}
          setImage={(value) => this.changeField('avatar', value)}
        />
        <View style={styles.spaceView} />
        <InputRow
          type="FULL NAME"
          value={this.state.fullName}
          placeholder={I18n.t('password')}
          editable={editing}
          onChangeText={value => this.changeField('fullName', value)}
        />
        <Divider />
        <InputRow
          type="EMAIL"
          value={this.state.email}
          placeholder={I18n.t('password')}
          editable={editing}
          onChangeText={value => this.changeField('email', value)}
        />
        <Divider />
        <InputRow
          type="PASSWORD"
          secureTextEntry
          value={this.state.password}
          placeholder={I18n.t('password')}
          editable={editing}
          onChangeText={value => this.changeField('password', value)}
        />
        <Divider />
        <SubTitle style={{ marginVertical: 5 }}>BIRTHDAY</SubTitle>
        <Text style={{ marginBottom: 5 }}>May 15, 1984</Text>
        <Divider />
        <View style={styles.row}>
          <SubTitle style={styles.fill}>GENDER</SubTitle>
          <Switch
            value={this.state.gender}
            onValueChange={value => this.changeField('gender', value)}
            disabled={!editing}
          />
        </View>
        <Divider />
        <View style={styles.row}>
          <SubTitle style={styles.fill}>NOTIFICATIONS</SubTitle>
          <Switch
            value={this.state.haveNotification}
            onValueChange={value => this.changeField('haveNotification', value)}
            disabled={!editing}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  spaceView: {
    marginTop: 20,
  },
  fill: {
    flex: 1,
  },
});

export default UserDetail;
