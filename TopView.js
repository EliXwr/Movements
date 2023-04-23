import React from 'react';
import { View, Text} from 'react-native';
import Styles from './Styles';

const TopView = () => (
  <View style={[Styles.topView, { justifyContent: 'center', alignItems: 'center' }]}>
    <Text>top</Text>
  </View>
);



export default TopView;
