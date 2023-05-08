// import { queries } from "@testing-library/react";
import axios from "axios";


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c34e25a528f6928955c924e067c2de15';

export const fetchTrendMovies = async () => {
        const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
        return response.data;
};

export const fetchDetails = async movieId => {
const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
return response.data;
};



export const fetchReviews = async movieId => {
const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
return response.data.results;
};


export const fetchCast = async movieId => {
const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
return response.data.cast;
};

export const fetchSearch = async query => {
const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
return response.data.results;
};
