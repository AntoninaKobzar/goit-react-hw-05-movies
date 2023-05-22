import PropTypes from 'prop-types';
import notFound from '../../images/notFound.jpg';
import css from './MovieInfo.module.css';

const MovieInfo = ({ movieInfo }) => {
  const {
    title,
    original_title,
    overview,
    genres,
    poster_path,
    release_date,
    vote_average,
  } = movieInfo;
  return (
    <>
      <img
        className={css.img}
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w400${poster_path}`
            : notFound
        }
        alt={title || original_title}
      />
      <div className={css.info}>
        <h1>
          {title || original_title}({Number.parseInt(release_date)})
        </h1>
        <p>User score: {vote_average}</p>
        <b>Overview</b>
        <p>{overview}</p>
        <b>Ganres</b>
        <p>{genres && genres.map(el => el.name).join(', ')}</p>
      </div>
    </>
  );
};

MovieInfo.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string,
    original_title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }).isRequired
    ).isRequired,
  }),
};

export default MovieInfo;
