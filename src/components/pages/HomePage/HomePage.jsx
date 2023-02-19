import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendMovies } from '../../services/moviesService';
import css from './homepage.module.css';
// import { getCastId } from '../services/moviesService';
// const location = useLocation
const HomePage = () => {
  const [filmList, setFilmList] = useState([]);
  const location = useLocation();

  console.log('HomePage:', location);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const { data } = await getTrendMovies();
        setFilmList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getFilms();
  }, []);
  const handleClickId = e => {};

  const { results } = filmList;

  return (
    <>
      <ul className={css.film_list}>
        {results &&
          results.map(movie => (
            <Link
              state={{ from: location }}
              to={`/movies/${movie.id}`}
              key={movie.id}
            >
              <li
                key={movie.id}
                className={css.film_name}
                onClick={handleClickId}
              >
                {movie.poster_path ? (
                  <img
                    className={css.film_img}
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt=""
                    id={movie.id}
                  />
                ) : (
                  <img
                    className={css.film_img}
                    src="https://www.meme-arsenal.com/create/template/2686727"
                    alt=""
                    id={movie.id}
                    onClick={handleClickId}
                  />
                )}

                <p>{movie.name || movie.title}</p>
              </li>{' '}
            </Link>
          ))}
      </ul>
    </>
  );
};
export default HomePage;
// fetch(
//   `https://api.themoviedb.org/3/trending/all/day?api_key=7061ce2759f5d23ca8f088e7f1e3737d`
// ).then(Response => console.log(Response));
// {movie_id}?api_key=<<api_key>>&language=en-US
// fetch(
//   `https://api.themoviedb.org/3/movie/640146?api_key=7061ce2759f5d23ca8f088e7f1e3737d`
// ).then(Response => console.log(Response));
