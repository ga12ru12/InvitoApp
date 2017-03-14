import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Platform,
  View,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import { Colors, Metrics } from '../themes';

class Button extends PureComponent {

  mapPropsToStyle = (style) => {
    const computedStyles = Object.keys(this.props).reduce((acc, key) => {
      if (this.props[key] === true && style[key]) {
        acc.push(style[key]);
        return acc;
      }
      return acc;
    }, []);
    return computedStyles;
  }

  render() {
    if (Platform.O === 'ios' || Platform.Version <= 21) {
      return (
        <TouchableOpacity
          style={[styles.default, ...this.mapPropsToStyle(styles), this.props.style]}
          activeOpacity={0.7}
          {...this.props}
        >
          {this.props.children}
        </TouchableOpacity>
      );
    }
    return (
      <TouchableNativeFeedback
        style={[styles.default, ...this.mapPropsToStyle(styles), this.props.style]}
        onPress={this.props.onPress}
        background={Colors.androidRippleColor}
        {...this.props}
      >
        <View>
          {this.props.children}
        </View>
      </TouchableNativeFeedback>
    );
  }
}

Button.propTypes = {
  ...TouchableOpacity.propTypes,
  style: React.PropTypes.object,
  block: React.PropTypes.bool,
  full: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  rounded: React.PropTypes.bool,
  large: React.PropTypes.bool,
  small: React.PropTypes.bool,
};

const styles = StyleSheet.create({
  default: {
    paddingVertical: Metrics.buttonPadding,
    paddingHorizontal: Metrics.buttonPadding + 10,
    backgroundColor: 'red',
    borderRadius: Metrics.borderRadiusBase,
    borderColor: 'red',
    height: 45,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  block: {
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  full: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderRadius: 0,
  },
  disabled: {
    backgroundColor: '#b5b5b5',
  },
  rounded: {
    paddingHorizontal: Metrics.buttonPadding + 20,
    borderRadius: Metrics.borderRadiusLarge,
  },
  small: {
    height: 30,
  },
  large: {
    height: 60,
  },
});

export default Button;
