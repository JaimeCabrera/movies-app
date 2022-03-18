import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import {Movie} from '../interfaces/movieInterface';
import {RootStackParmas} from '../navigation/Navigation';

const screenHeight = Dimensions.get('screen').height;

interface Props extends NativeStackScreenProps<RootStackParmas, 'Details'> {}

export const Detail = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri}} />
      </View>
      <View style={styles.container}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    overflow: 'hidden',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    paddingBottom: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,

    elevation: 8,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  image: {
    flex: 1,
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
