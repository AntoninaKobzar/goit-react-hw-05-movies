import { useEffect, useState } from "react";
import { fetchTrendMovies } from "services/api";
import { Link } from "react-router-dom";


const Movies = () => {
    const [movies, setMovies] = useState([]);
   
    useEffect(() => {
        
        fetchTrendMovies(); 
    },[])
    console.log({  })
    
        {movies.map(movie => {
            return <Link key={movie} to={`${movie}`}>{movie}</Link>;   
        })}
    
    return <div>Movies</div>
    
};

export default Movies;