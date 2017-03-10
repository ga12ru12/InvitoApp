import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Dimensions,
  Platform
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import I18n from '../i18n/I18n';

defa
export default class App extends React.PureComponent {

  state = {
    avatarSource: this.props.image,
    isUpload: false,
  };

  selectPhotoTapped() {
    const options = {
      title: I18n.t('selectAvatar'),
      cancelButtonTitle: I18n.t('cancel'),
      takePhotoButtonTitle: I18n.t('takePhoto'),
      chooseFromLibraryButtonTitle: I18n.t('choosefromLib'),
      allowsEditing: true,
      quality: 1.0,
      maxWidth: 150,
      maxHeight: 150,
    }

    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        // console.log('User cancelled photo picker');
      }
      else if (response.error) {
        // console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton);
      }
      else {
        var source;
        if (Platform.OS === 'ios') {
          source = {uri: response.uri.replace('file://', ''), isStatic: true};
        }
        else {
          source = {uri: response.uri, isStatic: true};
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
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <View style={[styles.avatarContainer]}>
            <Image
              style={styles.avatar}
              source={Platform.OS==='ios'?this.state.avatarSource:{uri:this.state.avatarSource.url}}>
            </Image>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}


false
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor:'transparent',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
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
    backgroundColor: 'transparent'
  }
});
