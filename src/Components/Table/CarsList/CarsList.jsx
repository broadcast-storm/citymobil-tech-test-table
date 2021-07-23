import classNames from 'classnames';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import SortByAlpha from '../SortByAlpha';
import ArrowSvg from '../../../Icons/arrow.svg';

const CarsList = ({
  className,
  tariffsList,
  carsInfo,
  searchText,
  selectCar,
}) => {
  const [isAlphabetically, setIsAlphabetically] = useState(true);
  const [selectedCarId, setSelectedCarId] = useState(null);

  useEffect(() => {
    selectCar(null);
    setSelectedCarId(null);
  }, [searchText]);

  const changeAlphabetically = () => {
    selectCar(null);
    setSelectedCarId(null);
    setIsAlphabetically((prev) => !prev);
  };
  const generateUniqueKey = (item, index) => {
    let result = '';
    Object.keys(item.tariffs).forEach((key) => {
      result += ` ${key} ${item.tariffs[key].year}`;
    });
    return `${index} ${item.mark} ${item.model} ${result}`;
  };

  const selectItem = (item, index) => {
    if (index === selectedCarId) {
      selectCar(null);
      setSelectedCarId(null);
    } else {
      const yearsSet = new Set();
      Object.keys(item.tariffs).forEach((key) => {
        yearsSet.add(item.tariffs[key].year);
      });
      let years = '';
      yearsSet.forEach((value) => {
        years += `${value} `;
      });
      selectCar(
        `Выбран автомобиль ${item.mark} ${item.model} ${years} ${
          years.length > 5 ? 'годов' : 'года'
        } выпуска`,
      );
      setSelectedCarId(index);
    }
  };

  return (
    <table className={classNames(styles.table, className)}>
      <tbody>
        <tr className={styles.head}>
          <th
            className={classNames(
              styles.head__name,
              styles.textLeft,
              styles.pointer,
            )}
            onClick={changeAlphabetically}
          >
            Марка и модель{' '}
            <img
              src={ArrowSvg}
              alt="порядок по алфавиту"
              className={classNames(
                styles.alphaPic,
                !isAlphabetically ? styles.reversed : null,
              )}
            />
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
            <tr
              key={generateUniqueKey(item, ind)}
              className={classNames(
                styles.infoTr,
                selectedCarId === ind ? styles['infoTr-clicked'] : null,
              )}
              onClick={() => selectItem(item, ind)}
            >
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
