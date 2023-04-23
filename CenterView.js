import React from 'react';
import { View, Text} from 'react-native';
import Styles from './Styles';

const CenterView = () => (
  <View style={[Styles.centerView, { justifyContent: 'center', alignItems: 'center' }]}>
    <Text>center</Text>
  </View>
);



export default CenterView;
