import { useEffect, useState } from 'react';
import { fetchTrendMovies } from '../services/api';
import MoviesList from '../components/MoviesList';
import Loader from '../components/Loader/Loader';
import css from '../components/MoviesList/MoviesList.module.css';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    getTrendMovies();
  }, []);

  const getTrendMovies = async () => {
    setLoading(true);
    try {
      const data = await fetchTrendMovies();
      setTrendMovies(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1 className={css.title}>Trending Today</h1>
      {trendMovies && <MoviesList movies={trendMovies} />}
      {isLoading && <Loader />}
      {error && (
        <h2>The service is temporarily unavailable. Please try again later.</h2>
      )}
    </>
  );
};

export default Home;
