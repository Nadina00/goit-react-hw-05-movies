import React, { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchMoviesByDetails } from 'components/services/ApiServices';
import { BASE_IMG_URL } from '../components/services/ApiBaseUrl';
import { Loader } from 'components/Loader/Loader';
import { loadingStatus } from 'components/services/loadingStatus';
import styles from 'components/Navigation/Navigation.module.css'

export default function MovieDetailts (){
  const [movie, setMovie] = useState({});
  const { movieId } = useParams('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState(loadingStatus.IDLE);

  useEffect(() => {
    setStatus(loadingStatus.PENDING);
    fetchMoviesByDetails(movieId)
      .then(movie => {
        setMovie(movie);
        setStatus(loadingStatus.RESOLVED);
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
  console.log(movie)
  if (status === loadingStatus.RESOLVED) {
    return (
      <div>
        <img src={BASE_IMG_URL + movie.poster_path} alt="" />
        <h2>{movie.title}</h2>
        <p> {movie.overview} </p>
        <p>Vote: {movie.vote_average}</p>
        <p>Data: {movie.release_date}</p>
        <Link to={`/movies/${movie.id}/cast`} movieId={movie.id} className={styles.link}>
          Cast
        </Link>
        <Link to={`/movies/${movie.id}/reviews`} movieId={movie.id} className={styles.link}>
          Reviews
        </Link>
      </div>
    );
  }
};
