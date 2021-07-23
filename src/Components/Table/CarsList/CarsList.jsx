import classNames from 'classnames';
import { useState } from 'react';
import styles from './styles.module.scss';

const CarsList = ({ className }) => {
  const [isAlphabetically, setIsAlphabetically] = useState(true);
  const changeAlphabetically = () => {
    setIsAlphabetically((prev) => !prev);
  };
  return (
    <table className={classNames(styles.table, className)}>
      <tbody>
        <tr className={styles.head}>
          <th className={styles.head__name} onClick={changeAlphabetically}>
            Марка и модель {isAlphabetically ? 'да' : 'нет'}
          </th>
          <th className={styles.head__name}>Эконом</th>
          <th className={styles.head__name}>Комфорт</th>
          <th className={styles.head__name}>Комфорт +</th>
          <th className={styles.head__name}>Минивен</th>
          <th className={styles.head__name}>Бизнес</th>
        </tr>
      </tbody>
    </table>
  );
};

export default CarsList;
