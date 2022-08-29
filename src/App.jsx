import React, {lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Loader } from 'components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const MovieReviews  = lazy(() => import("components/MoviesDetails/MovieReviews"));
const MovieCast  = lazy(() => import("components/MoviesDetails/MovieCast"));
const MovieDetailts = lazy(() => import("./pages/MovieDetailts"));

export default function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route  path="/" exact="true" ><Home /></Route>
          <Route path="/movies/:movieId" ><MovieDetailts /></Route>
          <Route path="/movies/:movieId/cast" ><MovieCast/></Route>
          <Route path="/movies/:movieId/reviews" ><MovieReviews /></Route>
          <Route path="/movies" exact="true"> <Movies /></Route>
          <Route path="*" ><NotFound /></Route>
        </Switch>
      </Suspense>
    </div>
  );
};
