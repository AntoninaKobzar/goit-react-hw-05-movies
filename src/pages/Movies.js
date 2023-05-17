// import { Suspense } from "react";
// import { Link, Outlet } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { fetchSearch } from "services/api";
// import { useLocation} from "react-router-dom";
// import Notiflix from 'notiflix';
// import MoviesList from "components/MoviesList";
// import SearchForm from "components/SearchForm";

import { useSearchParams } from "react-router-dom";
import  MoviesList  from "../components/MoviesList";
import  SearchForm  from "../components/SearchForm";
import { fetchSearch } from "../services/api";
// import Notiflix from 'notiflix';
// import Loader from "../components/Loader/Loader";

const Movies = () => {
  const movies = fetchSearch();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("movie") ?? "";

  const visibleMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(movieName.toLowerCase())
  );

  const updateQueryString = (movie) => {
    const nextParams = movie !== "" ? { movie } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchForm value={movieName} onChange={updateQueryString} />
      <MoviesList movies={visibleMovies} />
    </main>
  );
};

export default Movies;


// const Movies = () => {
//     const [query, setQuery] = useState('');
//     const [moviesData, setmoviesData] = useState([]);
//     const location = useLocation();
//     const fromQueryString = location.search.replace(/\?query=/, '');
    
//     const getQuery = searchName =>
//     searchName === ''
//       ? Notiflix.Notify.failure('Enter the name of the movie')
//       : setQuery(searchName);

//   useEffect(() => {
//     if (!query) {
//       return;
//     }

//     async function fetchData() {
//       try {
//         const response = await fetchSearch(query);
//         const data = response.data.results;

//         data.length === 0
//           ? Notiflix.Notify.failure(`Sorry, we can't find any ${query}`)
//           : setmoviesData(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     fetchData();
//   }, [query]);

//   useEffect(() => {
    
//     async function fetchData() {
//       try {
//         // const response = await fetchSearch(fromQueryString);
//         const response = await fetchSearch(query);
//         const data = response.data.results;
//         setmoviesData(data);
//       } catch (error) {
//         Notiflix.Notify.failure('Sorry,smth went wrong.');
//       }
//     }
//     fetchData();
//   }, []);

//       return (
//     <>
//       <SearchForm onSubmit={getQuery} />
//       {moviesData && <MoviesList moviesData={moviesData} />}
//        <ul>
//         <li>
//           <Link to="cast">Cast</Link>
//         </li>
//         <li>
//           <Link to="reviews">Reviews</Link>
//         </li>
//       </ul>
//       <Suspense fallback={<div>Loading subpage...</div>}>
//         <Outlet />
//       </Suspense>  

//     </>
//   );
// };

// export default Movies;