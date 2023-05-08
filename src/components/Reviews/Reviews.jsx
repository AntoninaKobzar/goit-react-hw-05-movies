import { useParams } from "react-router-dom";
import { fetchReviews } from "../../services/api";
import { useEffect, useState } from "react";
import Notiflix from 'notiflix';

const Reviews = () => {
    const { movieId } = useParams();
    const { review, setReview } = useState([]);


    useEffect(() => {
        const getReview = async (movieId) => {
            try {
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
            {review.map(({ author, content, id, author_details: { rating } }) => {
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
                )
            })}
        </>
    )
};

export default Reviews;