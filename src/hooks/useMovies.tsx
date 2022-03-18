import {useEffect, useState} from 'react';
import movieDB from '../api/movieDb';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesNowPlaying, setmoviesNowPlaying] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    const movies = resp.data.results;
    setmoviesNowPlaying(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    // movies now_playing
    getMovies();
  }, []);

  return {
    moviesNowPlaying,
    isLoading,
  };
};
