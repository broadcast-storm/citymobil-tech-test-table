import classNames from 'classnames';
import { useState } from 'react';
import CloseSvg from '../../../Icons/close.svg';
import styles from './styles.module.scss';

const SearchCarInput = ({ className, onChange }) => {
  const [searchText, setSearchText] = useState('');
  const findCars = () => {
    onChange(searchText);
  };
  const updateText = (event) => {
    setSearchText(event.target.value);
  };
  const clearText = () => {
    setSearchText('');
    onChange('');
  };
  return (
    <div className={classNames(styles['search-container'], className)}>
      <div className={styles['search-container__input-back']}>
        <input
          type="text"
          className={styles['search-container__input']}
          id="car-search"
          placeholder="Поиск"
          value={searchText}
          onChange={updateText}
        />
        {searchText.length > 0 ? (
          <button className={styles.close} type="button" onClick={clearText}>
            <img src={CloseSvg} alt="закрыть" />
          </button>
        ) : null}
      </div>

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
