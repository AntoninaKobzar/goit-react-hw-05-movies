import Home from 'pages/Home';
// import Movies from 'pages/Movies';
import { Routes, Route, NavLink } from 'react-router-dom';
// import React from 'react';

// import  Home  from './Home';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movies" element={<Movies/>}></Route> 
        <Route path='/movies/:movieId' element={<div>MovieDetails</div>}></Route>
      </Routes>
    </div>

  );
};

