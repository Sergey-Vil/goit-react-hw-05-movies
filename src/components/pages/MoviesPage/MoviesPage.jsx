import BackButton from 'components/BackButton/BackButton';
import { getMoviesSearch } from '../../services/moviesService';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import css from './moviepage.module.css';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [searchList, setSearchList] = useState([]);
  const [queryFilm, setQueryFilm] = useState(query);
  useEffect(() => {
    const getSearchList = async () => {
      const dataSearch = await getMoviesSearch(query);
      setSearchList(dataSearch.data.results);
    };
    getSearchList();
  }, [query]);

  const handleSearch = e => {
    e.preventDefault();
    setSearchParams({ query: queryFilm });
  };
  const handleChange = e => {
    console.log('change=>', e.target.value);
    setQueryFilm(e.target.value);
  };

  return (
    <>
      <BackButton />
      <div>
        <form onSubmit={handleSearch} className={css.search_form}>
          <input
            className={css.search_input}
            name="search"
            value={queryFilm}
            onChange={handleChange}
            type="text"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit" className={css.btn_search}>
            <span className="button-label">Search</span>
          </button>
        </form>
      </div>
      <ul className={css.search_list}>
        {searchList &&
          searchList.map(item => (
            <Link
              key={item.id}
              to={`/movies/${item.id}`}
              state={{ search: location }}
            >
              <div className={css.search_card}>
                <img
                  src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                  alt={item.original_title}
                />
                <p>{item.original_title}</p>
              </div>
            </Link>
          ))}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ul>
    </>
  );
};

export default Movies;
