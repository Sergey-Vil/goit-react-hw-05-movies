import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import css from './loader.module.css';

function Loader() {
  return (
    <div className={css.loader}>
      <ThreeDots
        height="24"
        width="148"
        radius="95"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
