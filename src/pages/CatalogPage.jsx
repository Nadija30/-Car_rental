import CarsList from 'components/CarsList/CarsList';
import FiltersCars from 'components/FiltersCars/FiltersCars';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectFilter } from '../redux/cars/carsSelectors';
import { getAllCars } from '../redux/cars/carsThunk';
import { filterCars } from '../shared/utils';
import { setFilter } from '../redux/cars/carsSlise';
import pagesCss from '../pages/Pages.module.css';
const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const filter = useSelector(selectFilter);

  const filteredCars = filterCars(cars, filter);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setFilter(null));
  }, [dispatch]);
  return (
    <>
      <section className={pagesCss.section}>
        <div className={pagesCss.container} style={{ '--top': '50px' }}>
          <FiltersCars cars={filteredCars} />
          {cars?.length > 0 && <CarsList adverts={filteredCars} />}
        </div>
      </section>
    </>
  );
};

export default CatalogPage;
