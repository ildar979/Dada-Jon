import React from 'react';
import styles from './NotFound.module.scss';

const index = () => {
  return (
    <div className={styles.body}>
      <h1>
        <span className={styles.bodyEmoji}>🧐</span>
        <br />
        Ничего не найдено!
      </h1>
      <p className={styles.bodyDiscription}>
        К сожалению такая страница отсутствует в нашем интернет-магазине.
      </p>
    </div>
  );
};

export default index;
