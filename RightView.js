import React from 'react';
import { View, Text} from 'react-native';
import Styles from './Styles';

const RightView = () => (
  <View style={[Styles.rightView, { justifyContent: 'center', alignItems: 'center' }]}>
    <Text>Right</Text>
  </View>
);


export default RightView;
