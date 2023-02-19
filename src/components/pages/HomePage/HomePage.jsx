import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendMovies } from '../../services/moviesService';
import css from './homepage.module.css';

const HomePage = () => {
  const [filmList, setFilmList] = useState([]);
  const location = useLocation();
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
