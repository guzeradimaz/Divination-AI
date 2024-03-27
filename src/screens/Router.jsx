import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './Home/Home';
import {Theme} from './Theme/Theme';
import {Settings} from './Settings/Settings';
import { Welcome } from './screens_welcome/Welcome';
import { Quiz1, Quiz2 } from './screens_welcome/Quiz1';

const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
};
export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" options={options} component={Welcome} />
        <Stack.Screen name="Quiz1" options={options} component={Quiz1} />
        <Stack.Screen name="Quiz2" options={options} component={Quiz2} />
        <Stack.Screen name="Home" options={options} component={Home} />
        <Stack.Screen name="Settings" options={options} component={Settings} />
        <Stack.Screen name="Theme" options={options} component={Theme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
