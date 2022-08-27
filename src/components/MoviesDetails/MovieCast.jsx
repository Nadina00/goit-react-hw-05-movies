import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { fetchMoviesByCredits } from 'components/services/ApiServices';
import { BASE_IMG_URL } from 'components/services/ApiBaseUrl';
import { Loader } from 'components/Loader/Loader';
import { loadingStatus } from 'components/services/loadingStatus';
import styles from './MovieCast.module.css'

export const MovieCast = () => {
  const [movieCasts, setMovieCast] = useState([]);
  let { movieId } = useParams('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState(loadingStatus.IDLE);

  useEffect(() => {
    setStatus(loadingStatus.PENDING);
    fetchMoviesByCredits(movieId)
      .then(casts => casts.cast)
      .then(movieCasts => {
        setMovieCast(movieCasts);
        setStatus(loadingStatus.RESOLVED);
        if (movieCasts.length < 1) {
          setStatus(loadingStatus.REJECTED);
          alert ('There are no cast...')
        }
      })
      .catch(error => {
        setError(error.message);
        setStatus(loadingStatus.REJECTED);
      });
  }, [movieId]);
  if (status === loadingStatus.PENDING) {
    return <Loader loader={Loader} />;
  }

  if (status === loadingStatus.REJECTED) {
    <h2>{error.message}</h2>;
  }
  if (status === loadingStatus.RESOLVED) {
    return (
      <ul className={styles.CastsList}>
        {movieCasts.map(movieCast => (
          <li key={movieCast.id} className={styles.CastsItem}>
            <h2>Character: {movieCast.character}</h2>
            <img src={BASE_IMG_URL + movieCast.profile_path} alt="" />
            <p>Name: {movieCast.name}</p>
          </li>
        ))}
      </ul>
    );
  }
};
