import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props extends NativeStackScreenProps<any, any> {}

export const Detail = ({route}: Props) => {
  const movie = route.params as Movie;
  return (
    <View>
      <Text>Detail {movie.title}</Text>
    </View>
  );
};
