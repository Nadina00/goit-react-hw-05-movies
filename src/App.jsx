import React, {lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MovieDetailts } from './pages/MovieDetailts';
import { NotFound } from './pages/NotFound';
import { MovieCast } from 'components/MoviesDetails/MovieCast';
import { MovieReviews } from 'components/MoviesDetails/MovieReviews';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));


export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId" element={<MovieDetailts />} />
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
