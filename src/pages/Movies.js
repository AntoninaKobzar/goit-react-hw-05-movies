import { useSearchParams } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import SearchForm from '../components/SearchForm';
import { useEffect, useState } from 'react';
import { fetchSearch } from '../services/api';
import Loader from '../components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  useEffect(() => {
    const getMoviesByQuery = async () => {
      setLoading(true);
      try {
        const data = await fetchSearch(movieName);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getMoviesByQuery();
  }, [movieName]);

  const handleSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchForm onSubmit={handleSubmit} />
      {movies && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
      {error && (
        <h2>The service is temporarily unavailable. Please try again later.</h2>
      )}
    </main>
  );
};

export default Movies;
