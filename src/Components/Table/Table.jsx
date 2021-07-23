import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.scss';
import SearchCarInput from './SearchCarInput/SearchCarInput';
import CarsList from './CarsList/CarsList';

const Table = () => {
  const [carsInfo, setCarsInfo] = useState(null);
  const [tariffsList, setTariffsList] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isInfoLoading, setIsInfoLoading] = useState(true);
  const [selectedCarId, setSelectedCarId] = useState(null);
  useEffect(async () => {
    try {
      const result = await axios.get('https://city-mobil.ru/api/cars');
      console.log(result.data);
      setCarsInfo(result.data.cars);
      setTariffsList(result.data.tariffs_list);
      setIsInfoLoading(false);
    } catch (e) {
      console.log(e);
      setIsError(true);
      setIsInfoLoading(false);
    }
  }, []);
  return (
    <div className={styles['table-container']}>
      {/* eslint-disable-next-line no-nested-ternary */}
      {isInfoLoading ? (
        <span>Загрузка...</span>
      ) : isError ? (
        <span>Произошла ошибка, перезагрузите страницу</span>
      ) : (
        <>
          <SearchCarInput className={styles['input-container']} />
          <CarsList
            className={styles.table}
            selectCar={setSelectedCarId}
            carsInfo={carsInfo}
            tariffsList={tariffsList}
          />
          {selectedCarId ? (
            <div className={styles['selected-car']}>
              <span className={styles['selected-car__text']}>
                Выбран автомобиль Audi A4 2005 года выпуска
              </span>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Table;
