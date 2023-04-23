import React from 'react';
import { View, Text} from 'react-native';
import Styles from './Styles';

const LeftView = () => (
  <View style={[Styles.leftView, { justifyContent: 'center', alignItems: 'center' }]}>
    <Text>left</Text>
  </View>
);



export default LeftView;
