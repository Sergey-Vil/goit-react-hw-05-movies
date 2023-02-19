import BackButton from 'components/BackButton/BackButton';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { getMoviesId } from '../../services/moviesService';
import css from './moviedetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [detailsFilm, setDetailsFilm] = useState('');
  useEffect(() => {
    const getDetailsFilm = async () => {
      try {
        const { data } = await getMoviesId(movieId);
        setDetailsFilm(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailsFilm();
  }, [movieId]);
  const { poster_path, title, vote_average, overview, genres } = detailsFilm;

  return (
    <>
      <BackButton />
      <div className={css.details}>
        {detailsFilm.poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
        ) : (
          <img
            src={`https://www.meme-arsenal.com/create/template/2686727`}
            alt=""
          />
        )}
        <div className={css.desc}>
          <h3>{title}</h3>
          <p>User Score: {vote_average}</p>
          <p>
            <b>Overview:</b> {overview}
          </p>
          {genres && (
            <div>
              <b>Genres</b>
              <p>{genres.map(ganre => ganre.name).join(' | ')}</p>
            </div>
          )}
        </div>
      </div>
      <div className={css.nav_detail}>
        <Link
          to="cast"
          state={{ from: location.state?.from || location.state?.search }}
        >
          <button className={css.detail}>Cast</button>
        </Link>
        <Link
          to="reviews"
          state={{ from: location.state?.from || location.state?.search }}
        >
          <button className={css.detail}>Reviews</button>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
