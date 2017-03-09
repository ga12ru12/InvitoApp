import React, { Component, PropTypes } from 'react';
import {
    View,
    ScrollView,
    Image,
    TextInput,
    Text,
    ListView,
    Dimensions,
    Animated,
    Keyboard,
    Alert,
    ActivityIndicator,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Inforow from '../Components/Inforow';
import styles from './style/AccountStyle';
import {Colors,Font} from '../Themes';
import Actions from '../Actions/Creators';
import { Actions as NavActions } from 'react-native-router-flux';
import I18n from '../I18n/I18n';
import NavBar from '../Navigation/NavBar';
import Avatar from '../Components/Avatar';
import UploadImage from '../Services/UploadImage';

const options = {
  title: 'Select Avatar',
}
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onSubmit: false,
    }
  }


  componentWillReceiveProps(newProps) {
   
  }    

  componentWillUnmount () {
  }

  onChange(data) {
    this.setState({...data});
  }

  setImage (image) {
    this.setState({onSubmit:true})
    UploadImage(image.uri).then((response) => {
      this.subAddUser(response);
    });
  }

  subAddUser(response) {
    this.props.dispatch(Actions.editUser({avatar: response ? 
      {"__type":"File",
        "name": response.name,
        "url": response.url
      } : this.props.user.avatar}));

    this.setState({onSubmit:false})
  }

  showSignOutPopup () {
    Alert.alert(
      I18n.t('logout'),
      I18n.t('messageLogout'),
      [
        {text: I18n.t('cancel'), onPress: () => {}},
        {text: I18n.t('yes'), onPress: () => this.signOut()},
      ]
    )
  }

  async signOut () {
    const { dispatch } = this.props;
    try {
      dispatch(Actions.logout());
      NavActions.getStarted({type: 'reset'});
    } catch (err) {
      // console.log(err)
    }
  }
  onSettingBusinessButton () {
    NavActions.settingBusiness();
  }

  renderAvatar() {
    username= 'Andrea Ana'
    return (
      <View style={styles.avatarBackground}>
        <View style={styles.avatarView}>
          <Avatar 
            setImage={ this.setImage.bind(this)}
            image={require('../Assets/img/default.png')} />
        <Text style={styles.username}>
            {username}
        </Text>
        </View>
      </View>
    );
  }

  renderInfo () {
    email = 'example@gmail.com';
    phoneNo = '090556532';
    return (
      <View style={styles.container}>
          {this.renderNav()}  
        <View style={styles.info}>
          <Inforow content={email} />
          <Inforow content={phoneNo}/>
        </View>
      </View>
    );
  }
 renderNav () {
    const titleNav = {
      text: 'account',
      color: Colors.title
    };
    const rightNav = {
      iconIonicon: 'md-log-out',
      color: Colors.title,
      onRight: () => {
        this.showSignOutPopup();
      }
    };
    const leftNav = {
      iconIonicon : 'md-checkmark',
      onLeft: () => {
        this.addInformation();
      }
    };
    return (
      <NavBar 
        right={rightNav} 
        title={titleNav} 
        left={leftNav}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {this.renderAvatar()}
          {this.renderInfo()}
        </ScrollView>

      {this.state.onSubmit && <ActivityIndicator
                     animating={true}
                     style={styles.indicator}
                     size="large"/>}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.data,
  };
}
export default connect(mapStateToProps)(Account);

