import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {Images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import { Button } from '../../components/Button/Button';

export const Welcome = () => {
  const nav = useNavigation();
  const handleContinue = () => {
    nav.navigate('Quiz1')
  }
  return (
    <ImageBackground
      source={Images.WelcomeBackground}
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 160}}
      resizeMode="cover"
    >
      <View>
        <Text
          style={{
            color: '#fff',
            fontSize: 36,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          Welcome
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          to
        </Text>
        <Text
          style={{
            color: '#E494C4',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          Divination AI
        </Text>
      </View>
      <Button text={'continue'} onPress={handleContinue}/>
    </ImageBackground>
  );
};
