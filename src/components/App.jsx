
import { lazy } from 'react';
import { Routes, Route} from 'react-router-dom';
import Layout from '../components/Layout';
const MoviesList = lazy(() => import('./MoviesList'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));



export const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="movies" element={<Movies/>}></Route> 
        <Route path='movies/:movieId' element={<MoviesList/>}></Route>
        <Route path="cast" element={<Cast/>} />
        <Route path="reviews" element={<Reviews/>} />
        </Route>
      </Routes>

  );
};

