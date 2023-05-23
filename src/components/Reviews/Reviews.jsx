import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setReview] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReview = async movieId => {
      try {
        setLoading(true);
        const data = await fetchReviews(movieId);
        setReview(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getReview(movieId);
  }, [movieId]);
  return (
    <>
      {movieReviews.length === 0 ? (
        <h2>There are currently no reviews</h2>
      ) : (
        <div>
          {movieReviews.map(
            ({ author, content, id, author_details: { rating } }) => {
              return (
                <li className={css.reviews} key={id}>
                  {
                    <>
                      <b className={css.author}>{author}</b>
                      <p className={css.rating}>
                        Rating:
                        {rating ? rating : 'There are currently no ratings'}
                      </p>
                      <p className={css.content}>{content}</p>
                    </>
                  }
                </li>
              );
            }
          )}
        </div>
      )}
      {error && (
        <h2>The service is temporarily unavailable. Please try again later.</h2>
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default Reviews;
