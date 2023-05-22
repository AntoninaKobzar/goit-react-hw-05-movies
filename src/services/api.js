import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c34e25a528f6928955c924e067c2de15';

export const fetchTrendMovies = async () => {
  const res = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return res.data.results;
};

export const fetchDetails = async movieId => {
  const res = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
};

export const fetchReviews = async movieId => {
  const res = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return res.data.results;
};

export const fetchCast = async movieId => {
  const res = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return res.data.cast;
};

export const fetchSearch = async query => {
  const res = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return res.data.results;
};
