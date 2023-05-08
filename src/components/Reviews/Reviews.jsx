import { useParams } from "react-router-dom";
import { fetchReviews } from "../../services/api";
import { useEffect, useState } from "react";

const Reviews = () => {
    const { movieId } = useParams();
    const { reiew, setReview } = useState([]);


    useEffect(() => {
        const getReview = async (movieId) => {
            try {
                const data = await fetchReviews(movieId);
                setReview(data);
            } catch {
                console.error();
            }
        }
        getReview(movieId);
    }, [movieId]);
    return (
        <>
            {reiew.map(({ author, content, id, author_details: { rating } }) => {
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