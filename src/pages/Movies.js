import { useEffect, useState } from "react";
import { fetchSearch } from "services/api";
import { useLocation} from "react-router-dom";
import Notiflix from 'notiflix';
import MoviesList from "components/MoviesList";
import SearchForm from "components/SearchForm";


const Movies = () => {
    const [query, setQuery] = useState('');
  const [moviesData, setmoviesData] = useState([]);
const location = useLocation();
const fromQueryString = location.search.replace(/\?query=/, '');
    
    const getQuery = searchName =>
    searchName === ''
      ? Notiflix.Notify.failure('Enter the name of the movie')
      : setQuery(searchName);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchData() {
      try {
        const response = await fetchSearch(query);
        const data = response.data.results;

        data.length === 0
          ? Notiflix.Notify.failure(`Sorry, we can't find any ${query}`)
          : setmoviesData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [query]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchSearch(fromQueryString);
        const data = response.data.results;
        setmoviesData(data);
      } catch (error) {
        Notiflix.Notify.failure('Sorry,smth went wrong.');
      }
    }
    fetchData();
  }, []);

      return (
    <>
      <SearchForm onSubmit={getQuery} />

            {moviesData && <MoviesList moviesData={moviesData} />}
        

    </>
  );
};

export default Movies;