import React from 'react';
import {View} from 'react-native';
import {Home} from './src/screens/Home/Home';

export const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Home />
    </View>
  );
};
