import React from 'react';
import {
  StyleSheet,
  PixelRatio,
  Dimensions,
  Text as RNText,
} from 'react-native';
import fonts from '../themes/Fonts';

const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const normalize = (size) => {
  if (pixelRatio === 2) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return size * 0.95;
    }
    // iphone 5
    if (deviceHeight < 667) {
      return size;
    // iphone 6-6s
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  }
  if (pixelRatio === 3) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
    }
    // Catch other weird android width sizings
    if (deviceHeight < 667) {
      return size * 1.15;
    // catch in-between size Androids and scale font up
    // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  }
  if (pixelRatio === 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size;
    // Catch other smaller android height sizings
    }
    if (deviceHeight < 667) {
      return size * 1.20;
    // catch in-between size Androids and scale font up
    // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.40;
  }
  // if older device ie pixelRatio !== 2 || 3 || 3.5
  return size;
};

class Text extends React.PureComponent {
  render() {
    return (
      <RNText
        {...this.props}
        style={[styles.text, this.props.color && { color: this.props.color }, this.props.style]}
      >
        {this.props.children}
      </RNText>
    );
  }
}

class H1 extends React.PureComponent {
  render() {
    return (
      <RNText
        {...this.props}
        style={[styles.h1, this.props.color && { color: this.props.color }, this.props.style]}
      >
        {this.props.children}
      </RNText>
    );
  }
}

class H2 extends React.PureComponent {
  render() {
    return (
      <RNText
        {...this.props}
        style={[styles.h2, this.props.color && { color: this.props.color }, this.props.style]}
      >
        {this.props.children}
      </RNText>
    );
  }
}

class H3 extends React.PureComponent {
  render() {
    return (
      <RNText
        {...this.props}
        style={[styles.h3, this.props.color && { color: this.props.color }, this.props.style]}
      >
        {this.props.children}
      </RNText>
    );
  }
}

class Title extends React.PureComponent {
  render() {
    return (
      <RNText
        {...this.props}
        style={[styles.title, this.props.color && { color: this.props.color }, this.props.style]}
      >
        {this.props.children}
      </RNText>
    );
  }
}
class SubTitle extends React.PureComponent {
  render() {
    return (
      <RNText
        {...this.props}
        style={[styles.subtitle, this.props.color && { color: this.props.color }, this.props.style]}
      >
        {this.props.children}
      </RNText>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: normalize(fonts.size.base),
    fontFamily: fonts.fontFamily,
    color: '#43484d',
  },
  h1: {
    fontSize: normalize(fonts.size.h1),
    fontFamily: fonts.fontFamily,
    color: '#43484d',
  },
  h2: {
    fontSize: normalize(fonts.size.h2),
    fontFamily: fonts.fontFamily,
    color: '#43484d',
  },
  h3: {
    fontSize: normalize(fonts.size.h3),
    fontFamily: fonts.fontFamily,
    color: '#43484d',
  },
  title: {
    fontSize: normalize(fonts.size.title),
    fontFamily: fonts.fontFamily,
    color: '#000',
  },
  subtitle: {
    fontSize: normalize(fonts.size.subtitle),
    fontFamily: fonts.fontFamily,
    color: '#86939e',
  },
});

export {
  Text,
  H1,
  H2,
  H3,
  Title,
  SubTitle,
};
