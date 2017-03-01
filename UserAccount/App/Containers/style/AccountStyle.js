import {  StyleSheet, Dimensions, PixelRatio } from 'react-native';
import {Fonts ,Metrics, Colors, Scale } from '../../Themes/index';
const { width, height } = Dimensions.get('window');
const scale = width/(380);
import AppStyle from './AppStyle';

export default StyleSheet.create({
  ...AppStyle,
info: {
  alignItems: 'flex-start',
  marginTop:20,
 },
infoText: {
  color: Colors.lightGray,
  fontSize: Fonts.size.medium,
 },
 avatarBackground: {
 	backgroundColor: '#55D1C3',
 	padding: 20,
 },
 avatarView: {
 	alignItems: 'center',
 	marginTop: 10,
 },
 username: {
 	marginTop: 10,
 	color: Colors.default,
 	fontSize: Fonts.size.large,
 },
 scrollView: {
	flex: 1, 
	marginBottom: 50, 
 },
 infoIcon: {
  	width: 80,
 	color: Colors.lightGray
 },

})