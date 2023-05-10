import { useEffect, useState } from "react";
import { fetchSearch } from "../services/api";
import { useSearchParams} from "react-router-dom";
import Notiflix from 'notiflix';
import Loader from "components/Loader/Loader";
import MoviesList from "components/MoviesList";


const Movies = () => {
    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParam] = useSearchParams({});
    const [isLoading, setLoading] = useState(false);
    // const location = useLocation();
   const query = searchParams.get('query') ?? "";
    useEffect(() => {
        
        if (query) {
            getQueryMovies(query);
        }
    },[query]);

    function onSubmit(e) {
        e.preventDefault();
        const { value } = e.target.query;
        const query = value.trim() ? { query: value } : {};
        setSearchParam(query)
        if (e.target.value === "") {
            return setSearchParam({});
        }
        setSearchParam({ query:e.target.value});
    }
    const getQueryMovies = async (query) => {
        try {
            setLoading(true);
            const data = await fetchSearch(query);
            setMovies(data);
            setLoading(false);
        } catch(error) {
            Notiflix.Notify.failure('Sorry,we didn`t find this page.');
        }
    }
    
    
    // const moviesFound = movies.filter(movie => movie.includes(query));
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" name="query" placeholder="Search..." />
                <button type="submit">Go</button>
            </form>
            <ul>
                {isLoading === false && <MoviesList movies={movies} />}
                {isLoading === true && <Loader />}
                {/* {[].map(movie => {
                    return (
                        <li key={movie}><Link to={`${movie}`} state={{from:location}}>{movie}</Link></li>
                    );
                })} */}
            </ul>
        </>
    ); 
    
};

export default Movies;