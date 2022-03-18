// }archivo que va a centralizar las petiiones}
import axios from 'axios';
const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'c60a52a10376e1b54c97edaaf706da83',
    language: 'es-ES',
  },
});

export default movieDB;

// https://api.themoviedb.org/3/movie/now_playing?api_key=c60a52a10376e1b54c97edaaf706da83&language=en-US&page=1
