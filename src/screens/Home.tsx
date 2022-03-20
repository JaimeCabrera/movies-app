import React, {useContext, useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {CardMovie} from '../components/CardMovie';
import {GradientBackground} from '../components/GradientBackground';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {useMovies} from '../hooks/useMovies';
import {getColorsImage} from '../helpers/getColorsImage';
import {GradientContext} from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');
// const windowWidth = Dimensions.get('window').width;

export const Home = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

  const {setMainColors} = useContext(GradientContext);
  const getPostColor = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const {primary = 'green', secondary = 'red'} = await getColorsImage(uri);
    setMainColors({primary, secondary});
  };

  // para poner el color de fondo al cargar las peliculas
  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPostColor(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator color="red" size={40} />
      </View>
    );
  }

  return (
    <GradientBackground>
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
              onSnapToItem={index => {
                getPostColor(index);
              }}
            />
          </View>
          {/* carousel populares */}
          <HorizontalSlider movies={popular} title="Populares" />
          <HorizontalSlider movies={topRated} title="Mejores puntuadas" />
          <HorizontalSlider movies={upcoming} title="Estrenos" />
        </View>
      </ScrollView>
    </GradientBackground>
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
