import React, { PureComponent } from 'react';
import { Image } from 'react-native';

class ThumbNail extends PureComponent {

  computeStyle = () => {
    const type = {
      width: (this.props.size) ? this.props.size : 50,
      height: (this.props.size) ? this.props.size : 50,
      borderRadius: (this.props.size) ? ((this.props.square) ? 0
      : (this.props.size / 2)) : ((this.props.square) ? 0 : 25),
    };
    return type;
  }

  render() {
    return (
      <Image style={[this.computeStyle(), this.props.style]} {...this.props} />
    );
  }
}

ThumbNail.propTypes = {
  ...Image.propTypes,
  style: React.PropTypes.object,
  square: React.PropTypes.bool,
  circular: React.PropTypes.bool,
  size: React.PropTypes.number,
};

export default ThumbNail;
