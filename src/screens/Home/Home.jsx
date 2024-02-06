import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from '../../assets';

export const Home = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={Images.Background}
      resizeMode="cover"
    >
      <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.34)'}}>
        <View
          style={{
            width: '100%',
            height: 80,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TopButton image={Images.User} />
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginRight: 30,
            }}
          >
            Hello {'\n'}user
          </Text>
          <TopButton image={Images.Palette} />
          <TopButton image={Images.Settings} />
        </View>
        
      </SafeAreaView>
    </ImageBackground>
  );
};

const TopButton = ({image, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 60,
        width: 60,
        borderRadius: 15,
        elevation: 5,
        backgroundColor: '#363636',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={image}
        style={{width: '80%', height: '80%'}}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};
