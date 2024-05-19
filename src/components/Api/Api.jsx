import axios from 'axios';

const API_KEY = '0318c5b31af678749f79ee66273e19f0';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrendingMovies = () => api.get('/trending/movie/day');
export const searchMovies = query =>
  api.get('/search/movie', { params: { query } });
export const getMovieDetails = id => api.get(`/movie/${id}`);
export const getMovieCredits = id => api.get(`/movie/${id}/credits`);
export const getMovieReviews = id => api.get(`/movie/${id}/reviews`);
