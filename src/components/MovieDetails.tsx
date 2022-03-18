import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <View>
      {/* details */}
      <View style={styles.detailsContainer}>
        <View style={styles.rating}>
          <Icon name="star-outline" size={16} color="grey" />
          <Text> {movieFull.vote_average}</Text>
          <Text style={styles.genre}>
            - {movieFull.genres.map(genre => genre.name).join(',')}
          </Text>
        </View>
        {/* historia */}
        <Text style={styles.history}>Historia</Text>
        <Text style={styles.historyDetails}>{movieFull.overview}</Text>
        {/* presupuesto */}
        <Text style={styles.budget}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      {/* casting */}
      <View style={styles.casting}>
        <Text style={styles.actorsTitle}>Actores</Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.flatlist}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  rating: {
    flexDirection: 'row',
  },
  genre: {
    marginLeft: 10,
  },
  history: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  historyDetails: {
    fontSize: 16,
  },
  budget: {
    fontSize: 18,
  },
  casting: {
    marginTop: 10,
    marginBottom: 100,
  },
  actorsTitle: {
    fontSize: 20,
    marginTop: 10,
    marginHorizontal: 20,
    fontWeight: 'bold',
  },
  flatlist: {
    marginTop: 10,
    height: 120,
  },
});
