
import { useEffect, useState } from "react";
import { fetchTrendMovies } from "../services/api";
import MoviesList from "../components/MoviesList";
import Notiflix from 'notiflix';
import Loader from "../components/Loader/Loader";


const Home = () => {
    const [trendMovies, setTrendMovies] = useState(null);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        getTrendMovies();
    }, []);
    
    const getTrendMovies = async () => {
        setLoading(true);
        try {
            const data = await fetchTrendMovies();
            setTrendMovies(data);
            setLoading(false);
        }
        catch(error) {
            Notiflix.Notify.failure("No results");
        }
    }
    return (
        <>
            <h1>Trending Today</h1>
            {trendMovies ? (isLoading === false && <MoviesList movies={trendMovies} />) :
                (<h2>
                    The service is temporarily unavailable. Please try again later.
                </h2>)}
          {isLoading === true && <Loader />}   
        </>
    );
        };
        

export default Home;