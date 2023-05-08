
import { lazy } from 'react';
import { Routes, Route} from 'react-router-dom';
import Layout from '../components/Layout';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));

export const App = () => {
  return (

      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="movies" element={<Movies/>}></Route> 
        <Route path='movies/:movieId' element={<div>MovieDetails</div>}></Route>
        <Route path="cast" element={<div>Cast</div>} />
        <Route path="review" element={<div>Review</div>} />
        </Route>
      </Routes>

  );
};

