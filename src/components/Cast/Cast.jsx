import { fetchCast } from 'services/api';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        const data = await fetchCast(movieId);
        setCast(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getCast(movieId);
  }, [movieId]);

  return (
    <>
      {cast.length === 0 ? (
        <h2>Sorry,there is no information.</h2>
      ) : (
        <ul className={css.list}>
          {cast.map(({ character, name, profile_path, cast_id }) => {
            return (
              <li className={css.item} key={cast_id}>
                <div>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : 'https://kartinkin.net/uploads/posts/2022-03/1647018833_14-kartinkin-net-p-anonim-kartinki-20.jpg'
                    }
                    width="200"
                    alt={name}
                  />
                  <h3>{name}</h3>
                  <p>{character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {error && (
        <h2>The service is temporarily unavailable. Please try again later.</h2>
      )}
      {isLoading && <Loader />}
    </>
  );
};
export default Cast;
