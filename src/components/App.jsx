import { Routes, Route, NavLink } from 'react';
import React from 'react';

// import { Home } from './Home';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink>Home</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
      </Routes>
    </div>

  );
};

