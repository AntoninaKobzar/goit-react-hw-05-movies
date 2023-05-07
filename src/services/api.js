import axios from "axios";

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie/550?api_key=c34e25a528f6928955c924e067c2de15';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=<<c34e25a528f6928955c924e067c2de15>>';

const fetchMovies = async (movie, day) => {
    try {
        const response = await axios.get(`/trending/${movie}/${day}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export default fetchMovies;

