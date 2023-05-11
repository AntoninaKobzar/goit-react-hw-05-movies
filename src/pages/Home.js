
import { useEffect, useState } from "react";
// import { NavLink,useLocation } from 'react-router-dom';
import { fetchTrendMovies } from "services/api";
import MoviesList from "components/MoviesList";
import Notiflix from 'notiflix';
import Loader from "components/Loader/Loader";


const Home = () => {
    // const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        getTrendMovies();
    }, []);
    
    const getTrendMovies = () => {
        try {
            setIsLoading(true);
            const data = fetchTrendMovies();
            setMovies(data);
            setIsLoading(false);
        }
        catch(error) {
            Notiflix.Notify.failure("No results");
        }
    }
    return (
        <>
            <h1>Trending Today</h1>
            {isLoading === false && <MoviesList movies={movies} />} 
            {isLoading === true && <Loader />}   
        </>
    );
        };
        

export default Home;