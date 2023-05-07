import { useEffect } from "react";
import { Link } from "react-router-dom";


const Movies = () => {
    // useEffect(() => {
        
    // },[])
    <div>
        {['movies-1', 'movies-2', 'movies-3'].map(movies => {
            return <Link key={movies} to={`${movies}`}>{movies}</Link>;   
        })}
    </div>
    // return <div>Movies</div>
    
};

export default Movies;