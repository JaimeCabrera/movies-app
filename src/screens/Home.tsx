import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {CardMovie} from '../components/CardMovie';
import {useMovies} from '../hooks/useMovies';

export const Home = () => {
  const {moviesNowPlaying, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator color="red" size={40} />
      </View>
    );
  }

  return (
    <View>
      <CardMovie movie={moviesNowPlaying[5]} />
    </View>
  );
};

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
