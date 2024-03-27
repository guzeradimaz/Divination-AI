import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#E494C4',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 15,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: '#fff',
          fontSize: 24,
          textTransform: 'uppercase',
          fontWeight: '300',
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
