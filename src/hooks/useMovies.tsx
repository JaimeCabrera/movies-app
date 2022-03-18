import {useEffect, useState} from 'react';
import movieDB from '../api/movieDb';
import {Movie, MovieDBResponse} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  // const [moviesPopulars, setmoviesPopulars] = useState<Movie[]>([]);

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
    const topRatedPromise = movieDB.get<MovieDBResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBResponse>('/upcoming');
    const popularPromise = movieDB.get<MovieDBResponse>('/popular');
    const response = await Promise.all([
      nowPlayingPromise,
      upcomingPromise,
      popularPromise,
      topRatedPromise,
    ]);
    // const movies = resNowPlaying.data.results;
    // setmoviesNowPlaying(resNowPlaying.data.results);
    // setmoviesPopulars(resPopular.data.results);
    setMoviesState({
      nowPlaying: response[0].data.results,
      upcoming: response[1].data.results,
      popular: response[2].data.results,
      topRated: response[3].data.results,
    });
    setIsLoading(false);
  };
  useEffect(() => {
    // movies now_playing
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
