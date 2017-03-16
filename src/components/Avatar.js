import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import I18n from '../i18n/I18n';
import { Images } from '../themes';

export default class Avatar extends React.PureComponent {

  state = {
    avatarSource: this.props.image,
    isUpload: false,
  };

  selectPhotoTapped = () => {
    const options = {
      title: I18n.t('selectAvatar'),
      cancelButtonTitle: I18n.t('cancel'),
      takePhotoButtonTitle: I18n.t('takePhoto'),
      chooseFromLibraryButtonTitle: I18n.t('selectPhoto'),
      allowsEditing: true,
      quality: 1.0,
      maxWidth: 150,
      maxHeight: 150,
    };

    ImagePicker.showImagePicker(options, (response) => {
      let source;
      if (response.didCancel) {
        // console.log('User cancelled photo picker');
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
      } else {
        if (Platform.OS === 'ios') {
          source = { uri: response.uri.replace('file://', ''), isStatic: true };
        } else {
          source = { uri: response.uri, isStatic: true };
        }
        this.props.setImage(source);
        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  render() {
    return (
      <View style={[styles.container]}>
        <TouchableOpacity onPress={!this.props.disabled && this.selectPhotoTapped}>
          <View style={[styles.avatarContainer]}>
            <Image
              style={styles.avatar}
              source={this.state.avatarSource || Images.default_avatar}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

Avatar.propTypes = {
  image: React.PropTypes.string,
  setImage: React.PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  shadow: {
    backgroundColor: '#000000',
    opacity: 0.5,
    borderRadius: 5,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});
