import axios from 'axios';

const serviceMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '7061ce2759f5d23ca8f088e7f1e3737d',
  },
});

export const getTrendMovies = async () => {
  const responce = await serviceMovies.get('/trending/all/day?');
  return responce;
};

export const getMoviesId = async movieId => {
  const responce = await serviceMovies.get(`movie/${movieId}`);
  return responce;
};
export const getCastId = async movieId => {
  const responce = await serviceMovies.get(`movie/${movieId}/credits`);
  return responce;
};
export const getReviewsId = async movieId => {
  const responce = await serviceMovies.get(`movie/${movieId}/reviews`);
  return responce;
};
export const getMoviesSearch = async query => {
  const responce = await serviceMovies.get(`/search/movie?query=${query}`);
  return responce;
};
