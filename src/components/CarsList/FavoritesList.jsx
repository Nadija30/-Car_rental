import { useSelector } from 'react-redux';

import { selectFavorites, selectFilter } from '../../redux/cars/carsSelectors';

import { filterCars } from '../../shared/utils';

import CarItem from 'components/CarItem/CarItem';
import NotFound from 'components/NotFound';

const FavoritesList = () => {
  const favoriteCars = useSelector(selectFavorites);
  const filter = useSelector(selectFilter);
  const filteredCars = filterCars(favoriteCars, filter);

  return (
    <div className="flex flex-col items-center justify-center gap-5 pb-4">
      {!filteredCars.length && <NotFound />}
      <ul className="cards-list">
        {filteredCars.map(car => (
          <CarItem car={car} key={car.id} />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
