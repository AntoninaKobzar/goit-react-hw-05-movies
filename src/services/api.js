import axios from "axios";


axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c34e25a528f6928955c924e067c2de15';

const fetchMovies = async () => {
        const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
        return response.data;
    
};
export default fetchMovies;

