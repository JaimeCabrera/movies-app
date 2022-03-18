import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {Detail} from '../screens/Detail';
import {Movie} from '../interfaces/movieInterface';

export type RootStackParmas = {
  Home: undefined;
  Details: Movie;
};

const Stack = createNativeStackNavigator<RootStackParmas>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: 'white'},
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Detail} />
    </Stack.Navigator>
  );
};
