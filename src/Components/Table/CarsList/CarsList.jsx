import classNames from 'classnames';
import { useState } from 'react';
import styles from './styles.module.scss';
import SortByAlpha from '../SortByAlpha';

const CarsList = ({ className, tariffsList, carsInfo, searchText }) => {
  const [isAlphabetically, setIsAlphabetically] = useState(true);
  const changeAlphabetically = () => {
    setIsAlphabetically((prev) => !prev);
  };
  const generateUniqueKey = (item, index) => {
    let result = '';
    Object.keys(item.tariffs).forEach((key) => {
      result += ` ${key} ${item.tariffs[key].year}`;
    });
    return `${index} ${item.mark} ${item.model} ${result}`;
  };

  return (
    <table className={classNames(styles.table, className)}>
      <tbody>
        <tr className={styles.head}>
          <th
            className={classNames(styles.head__name, styles.textLeft)}
            onClick={changeAlphabetically}
          >
            Марка и модель {isAlphabetically ? 'да' : 'нет'}
          </th>
          {tariffsList.map((item) => (
            <th className={styles.head__name} key={item}>
              {item}
            </th>
          ))}
        </tr>
        {SortByAlpha(carsInfo, isAlphabetically)
          .filter((item) =>
            `${item.mark.toLowerCase()} ${item.model.toLowerCase()}`.includes(
              searchText.toLowerCase(),
            ),
          )
          .map((item, ind) => (
            <tr key={generateUniqueKey(item, ind)}>
              <td
                className={classNames(styles.infoTd, styles.textLeft)}
              >{`${item.mark} ${item.model}`}</td>
              {tariffsList.map((tariff) => (
                <td
                  className={styles.infoTd}
                  key={`${tariff} ${generateUniqueKey(item, ind)}`}
                >
                  {tariff in item.tariffs ? item.tariffs[tariff].year : '—'}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CarsList;
