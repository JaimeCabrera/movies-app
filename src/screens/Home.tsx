import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {CardMovie} from '../components/CardMovie';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');
// const windowWidth = Dimensions.get('window').width;

export const Home = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator color="red" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View>
        {/* <CardMovie movie={moviesNowPlaying[5]} /> */}
        <View style={styles.carouselContainer}>
          {/* carousel principal */}
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <CardMovie movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>
        {/* carousel populares */}
        <HorizontalSlider movies={popular} title="Populares" />
        <HorizontalSlider movies={topRated} title="Mejores puntuadas" />
        <HorizontalSlider movies={upcoming} title="Estrenos" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    height: 460,
  },
  popularMoviesContainer: {
    height: 320,
    // marginTop: 10,
    // backgroundColor: 'red',
  },
  popularMoviesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
