import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies';

import MovieDetails from '../pages/MovieDetails';

import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';
import NotFound from '../pages/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>

      {/* <Route path="products" element={<Products />} /> */}
    </Routes>
  );
};
