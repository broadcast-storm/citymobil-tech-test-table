import classNames from 'classnames';
import { useState } from 'react';
import styles from './styles.module.scss';

const SearchCarInput = ({ className, onChange }) => {
  const [searchText, setSearchText] = useState('');
  const findCars = () => {
    onChange(searchText);
  };
  const updateText = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <div className={styles['search-container']}>
      <input
        type="text"
        className={classNames(styles['search-container__input'], className)}
        id="car-search"
        placeholder="Поиск"
        value={searchText}
        onChange={updateText}
      />

      <button
        className={styles['search-container__button']}
        type="button"
        onClick={findCars}
      >
        Найти
      </button>
    </div>
  );
};

export default SearchCarInput;
