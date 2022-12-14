import styles from './Search.module.scss';
import clearIcon from '../../assets/img/clear-27.svg';
import React, { useCallback, useContext, useRef, useState } from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';

const Search = () => {
  const [value, setValue] = useState('');
  const { setSearchValue } = useContext(SearchContext);

  const inputRef = useRef();

  const handleClearInput = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    [],
  );

  const handleChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg className={styles.searchIcon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={handleChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <img
          onClick={handleClearInput}
          className={styles.clearIcon}
          src={clearIcon}
          alt="Clear icon"
        />
      )}
    </div>
  );
};

export default Search;
