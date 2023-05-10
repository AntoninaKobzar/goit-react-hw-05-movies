
import { lazy } from 'react';
import { Routes, Route} from 'react-router-dom';
import Layout from '../components/Layout';
import MoviesList from './MoviesList/MoviesList';
import Reviews from './Reviews/Reviews';
import Cast from './Cast';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));


export const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="movies" element={<Movies/>}></Route> 
        <Route path='movies/:movieId' element={<MoviesList/>}></Route>
        <Route path="cast" element={<Cast/>} />
        <Route path="review" element={<Reviews/>} />
        </Route>
      </Routes>

  );
};

