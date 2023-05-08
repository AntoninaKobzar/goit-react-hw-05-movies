import { useEffect,useState } from "react";
import { fetchTrendMovies }   from "../../services/api";


const Movies = ({movies}) => {
    // const [movies, setMovies] = useState(null);
    useEffect(() => {
        fetchTrendMovies();
    }, []);
    
    
    return (
        <div>
            <ul>
                {/* {movies.map(movie => (
                    <li key={movie.id}>
                        {movie.title || movie.name}
                    </li>
                ))} */}
            </ul>
        </div>
    );   
};
export default Movies;