import { useSelector } from 'react-redux';

import { selectFavorites } from '../../redux/cars/carsSelectors';

import FavoritesList from 'components/CarsList/FavoritesList';

import FiltersCars from 'components/FiltersCars/FiltersCars';

const Sidebar = () => {
  const favoriteCars = useSelector(selectFavorites);

  return (
    <>
      <FiltersCars cars={favoriteCars} />
      <FavoritesList />
    </>
  );
};
export default Sidebar;
