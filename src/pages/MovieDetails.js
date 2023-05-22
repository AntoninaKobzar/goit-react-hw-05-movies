import { Outlet, Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { fetchDetails } from 'services/api';
import Loader from 'components/Loader';
import MovieInfo from 'components/MovieInfo';
import { HiArrowLeft } from 'react-icons/hi';
import css from '../components/MovieInfo/MovieInfo.module.css';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovieInfo = async () => {
      setLoading(true);
      try {
        const data = await fetchDetails(movieId);
        setMovieInfo(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getMovieInfo(movieId);
  }, [movieId]);

  return (
    <main>
      {/* <BackLink to={backLinkHref.current}>Back to movies</BackLink> */}

      <div className={css.btn}>
        <Link to={backLinkHref.current}>
          <HiArrowLeft size="24" />
          Back to movies
        </Link>
      </div>
      {isLoading && <Loader />}
      {movieInfo.length !== 0 && <MovieInfo movieInfo={movieInfo} />}
      <ul className={css.list}>
        <li className={css.item}>
          <Link to="cast">Cast</Link>
        </li>

        <li className={css.item}>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      {error && (
        <h2>The service is temporarily unavailable. Please try again later.</h2>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
