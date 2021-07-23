import classNames from 'classnames';
import styles from './styles.module.scss';

const SearchCarInput = ({ className }) => (
  <div className={styles['search-container']}>
    <input
      type="text"
      className={classNames(styles['search-container__input'], className)}
      id="car-search"
      placeholder="Поиск"
    />

    <button className={styles['search-container__button']} type="button">
      Найти
    </button>
  </div>
);

export default SearchCarInput;
