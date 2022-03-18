import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}
export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.actorContainer}>
      {actor.profile_path && <Image style={styles.actorImg} source={{uri}} />}

      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  actorContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginLeft: 20,
    // marginRight: ,
    height: 95,
    padding: 8,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,

    elevation: 3,
  },
  actorImg: {
    width: 80,
    height: 80,
    borderRadius: 10,
    // marginLeft: 5,
  },
  actorInfo: {
    marginLeft: 10,
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actorCharacter: {
    fontSize: 16,
    opacity: 0.7,
  },
});
