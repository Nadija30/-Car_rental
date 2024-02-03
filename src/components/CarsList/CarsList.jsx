import PropTypes from 'prop-types';

import Button from '../Button';

import { COUNT_CARS } from '../../shared/constants';

import { useLoadMore } from '../../shared/hooks';
import { filteredCars } from '../../shared/utils';
import CarItem from '../CarItem/CarItem';
import listCss from './CarsList.module.css';

const CarsList = ({ adverts }) => {
  const [currentPage, carsLimit, loadMore] = useLoadMore(COUNT_CARS);

  const indexOfLastCar = currentPage * carsLimit;
  return (
    <>
      <ul className={listCss.carsList}>
        {filteredCars(adverts, indexOfLastCar).map(car => (
          <CarItem car={car} key={car.id} />
        ))}
      </ul>
      {adverts?.length >= indexOfLastCar && (
        <Button className={listCss.load} label="Load more" onClick={loadMore} />
      )}
    </>
  );
};

CarsList.propTypes = {
  adverts: PropTypes.array,
};

export default CarsList;
