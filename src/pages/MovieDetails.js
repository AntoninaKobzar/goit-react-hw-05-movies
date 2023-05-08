import { Link, Outlet, useParams } from "react-router-dom";
import { fetchDetails } from "../services/api";
import Reviews from "../components/Reviews";
import { useEffect, useState } from "react";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [dataMovie, setDataMovie] = useState({});
    useEffect(() => {
        getMovieDetails(movieId);
    }, [movieId]);
    const getMovieDetails = async (movieId) => {
        try {
            const data = await fetchDetails(movieId);
            setDataMovie(data);
        } catch {
            console.error();
}
    }
    return (
        <>
            <h1>Additional information</h1>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">{<Reviews/>}</Link>
                </li>
            </ul>
            <Outlet/>
        </>
    );
}

export default MovieDetails;