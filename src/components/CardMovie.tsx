import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const CardMovie = ({movie, width = 300, height = 420}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', movie)}
      activeOpacity={0.85}
      style={{...styles.cardContainer, width, height}}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri}} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    marginHorizontal: 8,
  },
  image: {
    flex: 1,
    // marginHorizontal: 2,
    // marginVertical: 2,
    borderRadius: 16,
  },
  imageContainer: {
    borderRadius: 16,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,

    elevation: 8,
  },
});
