
    import { Link,useLocation } from 'react-router-dom';
    import PropTypes from 'prop-types';


    const MoviesList = ({movies}) => {
        const location = useLocation();
        
        return (
                <ul>
                    {movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                                {movie.title || movie.name}
                            </Link> 
                        </li>
                    ))} 
                </ul>
        );   
    };

    MoviesList.propTypes = {
        movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    };
    export default MoviesList;