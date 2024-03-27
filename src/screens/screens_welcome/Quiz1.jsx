import React, {useState} from 'react';
import {Images} from '../../assets';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {Button} from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';

export const Quiz1 = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const nav = useNavigation();
  const buttonsData = [
    {
      id: 'id-123fsad',
      text: 'Learn tarot',
    },
    {
      id: 'id-123fsfdsad',
      text: 'Search answers',
    },
    {
      id: 'id-123fgdfsfdsad',
      text: 'Develop intuition',
    },
    {
      id: 'id-123fgdfsfdsafdd',
      text: 'Find spiritual guidance',
    },
    {
      id: 'id-123fgdfsfdsafdgsfd',
      text: 'Enjoy',
    },
  ];

  const handleNext = () => nav.navigate('Quiz2');
  const selectButton = id => setSelectedButton(id);

  return (
    <ImageBackground
      source={Images.WelcomeBackground}
      style={{
        flex: 1,
      }}
      resizeMode="cover"
    >
      <BlurView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 160,
          borderWidth: 1,
        }}
        blurType="light"
        blurAmount={10}
      >
        <View
          style={{
            width: '100%',
            paddingLeft: 30,
          }}
        >
          <Text
            style={{
              width: '100%',
              textAlign: 'left',
              fontWeight: 'bold',
              color: '#fff',
              fontSize: 24,
              marginBottom: 20,
            }}
          >
            What brought you to {'\n'}Divination AI?
          </Text>
          {buttonsData.map(item => {
            const isCurrent = item.id === selectedButton;
            return (
              <TouchableOpacity
                style={{
                  width: '90%',
                  borderWidth: 2,
                  borderColor: isCurrent ? '#E494C4' : '#fff',
                  marginVertical: 10,
                  paddingVertical: 10,
                  borderRadius: 15,
                  paddingLeft: 10,
                  backgroundColor: isCurrent ? '#E494C4' : null,
                }}
                key={item.id}
                onPress={() => selectButton(item.id)}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Button text={'Continue'} onPress={handleNext} />
      </BlurView>
    </ImageBackground>
  );
};

export const Quiz2 = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttonsData = [
    {
      id: 'id-123fsad',
      text: 'Experienced',
    },
    {
      id: 'id-123fsfdsad',
      text: 'With an average level',
    },
    {
      id: 'id-123fgdfsfdsad',
      text: 'Studying',
    },
    {
      id: 'id-123fgdfsfdsafdd',
      text: 'Newbie',
    },
  ];

  const selectButton = id => setSelectedButton(id);

  return (
    <ImageBackground
      source={Images.WelcomeBackground}
      style={{
        flex: 1,
      }}
      resizeMode="cover"
    >
      <BlurView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 160,
          borderWidth: 1,
        }}
        blurType="light"
        blurAmount={10}
      >
        <View
          style={{
            width: '100%',
            paddingLeft: 30,
          }}
        >
          <Text
            style={{
              width: '100%',
              textAlign: 'left',
              fontWeight: 'bold',
              color: '#fff',
              fontSize: 24,
              marginBottom: 20,
            }}
          >
            How familiar are you {'\n'}with tarot?
          </Text>
          {buttonsData.map(item => {
            const isCurrent = item.id === selectedButton;
            return (
              <TouchableOpacity
                style={{
                  width: '90%',
                  borderWidth: 2,
                  borderColor: isCurrent ? '#E494C4' : '#fff',
                  marginVertical: 10,
                  paddingVertical: 10,
                  borderRadius: 15,
                  paddingLeft: 10,
                  backgroundColor: isCurrent ? '#E494C4' : null,
                }}
                key={item.id}
                onPress={() => selectButton(item.id)}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 18,
                  }}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Button text={'Continue'} />
      </BlurView>
    </ImageBackground>
  );
};
