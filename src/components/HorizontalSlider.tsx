import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {CardMovie} from './CardMovie';

interface Props {
  movies: Movie[];
  title?: string;
}

export const HorizontalSlider = ({movies, title}: Props) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{...styles.popularMoviesContainer, height: title ? 320 : 280}}>
      {title && <Text style={styles.popularMoviesTitle}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <CardMovie movie={item} width={140} height={240} />
        )}
        keyExtractor={({id}) => id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  popularMoviesContainer: {
    // height: 30,
    // marginBottom: 5,
  },
  popularMoviesTitle: {
    marginTop: 5,
    fontSize: 24,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
