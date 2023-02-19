import { Link, useLocation } from 'react-router-dom';
import css from './backbutton.module.css';
const BackButton = () => {
  const location = useLocation();
  return (
    <Link
      className={css.back_link}
      to={location.state?.from || location.state?.search || '/'}
    >
      <button className={css.btn_back}> Go Back</button>
    </Link>
  );
};

export default BackButton;
