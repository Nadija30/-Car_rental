import { useSelector } from 'react-redux';

import { selectFavorites, selectFilter } from '../../redux/cars/carsSelectors';

import { filterCars } from '../../shared/utils';

import CarItem from 'components/CarItem/CarItem';
import NotFound from 'components/NotFound';
import listCss from './CarsList.module.css';
import pagesCss from '../../pages/Pages.module.css';

const FavoritesList = () => {
  const favoriteCars = useSelector(selectFavorites);
  const filter = useSelector(selectFilter);
  const filteredCars = filterCars(favoriteCars, filter);
  return (
    <section className={pagesCss.section}>
      <div className={pagesCss.container}>
        {!filteredCars.length && <NotFound />}
        <ul className={listCss.carsList}>
          {filteredCars.map(car => (
            <CarItem car={car} key={car.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FavoritesList;
