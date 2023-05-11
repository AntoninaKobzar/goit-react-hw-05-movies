import { Link, Outlet, useParams,useLocation } from "react-router-dom";
import { fetchDetails } from "services/api";
import Reviews from "components/Reviews";
import { useEffect, useState, useRef, Suspense } from "react";
import Notiflix from 'notiflix';
import Loader from "components/Loader";
import MovieInfo from 'components/MovieInfo';

const MovieDetails = () => {
    const location = useLocation();
    // const backLinkLocationRef=useRef(location.state?.from ??"/movies");
    const { movieId } = useParams();
    const [dataMovie, setDataMovie] = useState({});
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        getMovieDetails(movieId);
    }, [movieId]);


    const getMovieDetails = async (movieId) => {
        try {
            setLoading(true);
            const data = await fetchDetails(movieId);
            setDataMovie(data);
            setLoading(false);
        } catch(error) {
            Notiflix.Notify.failure('No data');
}
    }
    const { title, overview, genres, poster_path, release_date, vote_average } = dataMovie;
    return (
        <>
            {setLoading === false && (
                <>
                    <MovieInfo
                        genres={genres}
                        title={title}
                        overview={overview}
                        vote_average={vote_average}
                        poster_path={poster_path}
                        release_date={release_date}
                    />
                </> 
                        )}
                        {isLoading===true && <Loader/>}
            <h1>Additional information</h1>
            <Link to={location.state?.from ??"/movies"}>Go back</Link>
            <ul>
                <li>
                    <Link to="cast">{<Cast/>}</Link>
                </li>
                <li>
                    <Link to="reviews">{<Reviews/>}</Link>
                </li>
            </ul>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </>
    );
}

export default MovieDetails;