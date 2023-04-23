import React from 'react';
import { View, Text} from 'react-native';
import Styles from './Styles';

const BottomView = () => (
  <View style={[Styles.bottomView, { justifyContent: 'center', alignItems: 'center' }]}>
    <Text>bottom</Text>
  </View>
);


export default BottomView;