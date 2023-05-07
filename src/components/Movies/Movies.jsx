import { useEffect,useState } from "react";
import fetchMovies  from "services/api";


const Movies = ({movie}) => {
  const [movies, setMovies] = useState(null);
    useEffect(() => {
        if (movie === ''){
            return;
        }
        fetchMovies();
    }, []);
    
    
    return (
        <div>
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
        </div>)   
};
export default Movies;