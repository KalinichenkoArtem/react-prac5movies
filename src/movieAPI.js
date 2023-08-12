import axios from 'axios';
const API_KEY = 'c7881b8c7fb683724db136016dbb7912';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendMovies = async () => {
  const { data } = await axios.get('trending/movie/day');
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
};

export const getMovieByName = async query => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      query,
    },
  });
  return data;
};
