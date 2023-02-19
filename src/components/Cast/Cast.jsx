import { getCastId } from 'components/services/moviesService';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import css from './cast.module.css';

const Cast = () => {
  const [castList, setCastList] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getCastList = async () => {
      const dataList = await getCastId(movieId);

      setCastList(dataList.data);
    };
    getCastList();
  }, [movieId]);
  const { cast } = castList;

  return (
    <>
      <ul className={css.cast_list}>
        {cast &&
          cast.map(item => (
            <li key={item.credit_id} className={css.cast_card}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w185${item.profile_path}`
                    : 'noFoto'
                }
                alt={item.name}
                // width="30"
              />
              <p>{item.name}</p>
              <p>
                Character:
                {item.character}
              </p>
            </li>
          ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Cast;
