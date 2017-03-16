import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = ({ style }) => (
  <View style={[styles.container, style && style]} />
);

const styles = StyleSheet.create({
  container: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#e1e8ee',
  },
});

export default Divider;
