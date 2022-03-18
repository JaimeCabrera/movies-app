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
        contentStyle: {
          backgroundColor: '#f2f3f4',
        },
      }}>
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
      <Stack.Screen
        name="Details"
        options={{
          contentStyle: {
            backgroundColor: 'white',
          },
          headerBackVisible: true,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'rgba( 93, 109, 126,  .0)',
          },
          headerTitle: '',
          headerTintColor: 'white',
        }}
        component={Detail}
      />
    </Stack.Navigator>
  );
};
