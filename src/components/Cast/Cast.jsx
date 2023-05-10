    import { fetchCast } from '../../services/api';
    import { useEffect, useState } from 'react';
    import Loader from '../Loader/Loader';
    import { useParams } from 'react-router-dom';
    import Notiflix from 'notiflix';

    const Cast = () => {
        const { movieId } = useParams();
        const { cast, setCast } = useState(null);
        const { isLoading, setLoading } = useState(false);

        useEffect(() => {
            const getCast = async (movieId) => {
                try {
                    setLoading(true);
                    const data = await fetchCast(movieId);
                    setCast(data);
                    setLoading(false);
                } catch (error) {
                    Notiflix.Notify.failure('Sorry,there is no information.');
                }
            }
            getCast(movieId);
        }, [movieId]);

        return (
            <>
                {isLoading === false && (
                    <ul>{cast.map(({ character, name, profile_path, cast_id }) => {
                            return (
                                <li key={cast_id}>
                                    <div>
                                        <img src={profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}`
                                            : 'https://kartinkin.net/uploads/posts/2022-03/1647018833_14-kartinkin-net-p-anonim-kartinki-20.jpg'}
                                            width="200"
                                            alt={name} />
                                        {name}
                                        {character}
                                    </div>
                                </li>
                            );
                        })
                    }</ul>
                )}
                {isLoading === true && <Loader />}
            </>
        );
    };
    export default Cast;