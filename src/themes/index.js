import Colors from './Colors'
import Fonts from './Fonts'
import Metrics from './Metrics'
import { Dimensions,  } from 'react-native';
const { width, height } = Dimensions.get('window');
// console.log('320 568');
const Scale = width/320;
export { Colors, Fonts, Metrics, Scale }
