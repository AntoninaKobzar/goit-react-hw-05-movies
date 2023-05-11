import { useParams } from "react-router-dom";
import { fetchReviews } from "services/api";
import { useEffect, useState } from "react";
import Loader from "components/Loader";
import Notiflix from 'notiflix';

const Reviews = () => {
    const { movieId } = useParams();
    const { movieReviews, setReview } = useState(null);
    const { isLoading, setLoading } = useState(false);

    useEffect(() => {
        const getReview = async (movieId) => {
            try {
                setLoading(true);
                const data = await fetchReviews(movieId);
                setReview(data);
            } catch(error) {
                Notiflix.Notify.failure("No reviews");
            }
        }
        getReview(movieId);
    }, [movieId]);
    return (
        <>
            {isLoading === false && movieReviews.length === 0 ? (<h2>There are currently no reviews</h2>)
                : (<div>
                    {movieReviews.map(({ author, content, id, author_details: { rating }, }) => {
                            return (
                                <li key={id}>
                                    {
                                        <>
                                            <b>{author}</b>
                                            <p>Rating:{rating ? rating : 'There are currently no ratings'}</p>
                                            <p>{content}</p>
                                        </>
                                    }
                                </li>
                            );
                        })
                    }
                    </div>
                )}
                
                {isLoading === true && <Loader />}
        </>
        );
};

export default Reviews;