import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Metrics } from '../themes';

const Card = (props) => {
  return (
    <View style={[styles.card, props.style]} {...props}>
      {props.children}
    </View>
  );
};

Card.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 2,
    flex: 1,
    borderWidth: Metrics.borderWidth,
    borderRadius: 2,
    borderColor: Colors.cardBorderColor,
    flexWrap: 'wrap',
    backgroundColor: Colors.cardDefaultBg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
  },
});

export default Card;
