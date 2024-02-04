import PropTypes from 'prop-types';
import sprite from '../../assets/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';
import DefaultCar from '../../assets/images/car.jpg';
import { useToggle } from '../../shared/hooks';
import { Modal, ModalCardDetail } from '../Modal';
import { getCarData, getLocationData } from '../../shared/utils/utils';
import {
  removeFromFavorites,
  setToFavorites,
} from '../../redux/cars/carsSlise';

import { selectFavorites } from '../../redux/cars/carsSelectors';
import CardInfoBlock from './CardInfoBlock';
import ThumbImage from 'components/ThumbImage';
import itemCss from './CarItem.module.css';

const CarItem = ({ car }) => {
  const { isOpen, open, close } = useToggle(false);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const { id, year, make, model, img, rentalPrice, address } = car;

  const carData = getCarData(car);
  const locationData = getLocationData(address, car);

  const isFavorite = favorites?.some(favCar => favCar.id === id);

  const handleToggleFavorite = () => {
    return isFavorite
      ? dispatch(removeFromFavorites(car))
      : dispatch(setToFavorites(car));
  };
  return (
    <>
      <li className={itemCss.carItem}>
        <div className={itemCss.carCard}>
          <div className={itemCss.imgWrap}>
            <ThumbImage
              className={itemCss.img}
              src={img ? img : DefaultCar}
              alt={`${make} ${model}`}
              width="274"
              height="426"
              loading="lazy"
            />
            <svg
              className={`${itemCss.heart} ${
                isFavorite ? itemCss.favorite : ''
              }`}
              onClick={handleToggleFavorite}
              svg
              width="24"
              height="24"
            >
              <use href={`${sprite}#icon-heart`} />
            </svg>
          </div>
          <div className={itemCss.descriptionWrap}>
            <div className={itemCss.titleWrap}>
              <h3 className={itemCss.title}>
                {make} <span className={itemCss.span}>{model}</span>, {year}
              </h3>
              <p>{rentalPrice}</p>
            </div>
            <div className={itemCss.descriptListWrap}>
              <CardInfoBlock locationData={locationData} carData={carData} />
            </div>
          </div>
        </div>
        <Button label="Learn more" className={itemCss.button} onClick={open} />
        {isOpen && (
          <Modal isOpen={isOpen} onClose={close}>
            <ModalCardDetail car={car} />
          </Modal>
        )}
      </li>
    </>
  );
};
CarItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    functionalities: PropTypes.array.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
  }).isRequired,
  fav: PropTypes.bool,
};

export default CarItem;
