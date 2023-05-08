import { useEffect, useState } from "react";
import { fetchSearch } from "../services/api";
import { Link, useSearchParams,useLocation } from "react-router-dom";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParam] = useSearchParams({});
    const location = useLocation();
   const query = searchParams.get('query') ?? "";
    useEffect(() => {
        
        if (query) {
            getQueryMovies(query);
        }
    }, [searchParams]);

    function onSubmit(e) {
        e.preventDefault();
        const { value } = e.target.query;
        const query = value.trim() ? { query: value } : {};
        if (e.target.value === "") {
            return setSearchParam({});
        }
        setSearchParam({ query:e.target.value});
    }
    const getQueryMovies = async (query) => {
        try {
            const data = await fetchSearch(query);
            setMovies(data);
        } catch(error) {
            console.log('Sorry,we didn`t find this page.');
        }
    }
    
    
    const moviesFound = movies.filter(movie => movie.includes(query));
    
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" name="query" placeholder="Search..." />
                <button type="submit">Go</button>
            </form>
            <ul>
                {moviesFound.map(movie => {
                    return (
                        <li key={movie}><Link to={`${movie}`} state={{from:location}}>{movie}</Link></li>
                    );
                })}
            </ul>
                    
            <div>Movies</div>
        </>
    ) 
    
};

export default Movies;