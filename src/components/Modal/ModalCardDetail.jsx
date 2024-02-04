import PropTypes from 'prop-types';

import {
  getFuelEngineData,
  getFullCarData,
  parseMileage,
  parsePrice,
  parseRentalConditions,
  renderItems,
} from '../../shared/utils';
import Separator from '../Separator';
import ThumbImage from '../ThumbImage';
import RentalCondBlock from '../RentalConditionals/RentalCondBlock';

import AccessoriesBlock from '../Accessories/AccessoriesBlock';
import modalCss from './Modal.module.css';
const ModalCardDetail = ({ car }) => {
  const {
    year,
    make,
    model,
    img,
    rentalPrice,
    address,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
  } = car;

  const carData = getFuelEngineData(car);
  const locationData = getFullCarData(address, car);
  const rentConditions = parseRentalConditions(rentalConditions);
  const mile = parseMileage(mileage);
  const price = parsePrice(rentalPrice);

  return (
    <div className={modalCss.modalCarWrap}>
      <div className={modalCss.modalCar}>
        <div className={modalCss.modalImgWrap}>
          <ThumbImage
            width="461"
            height="248"
            src={img}
            alt={`${make} ${model}`}
            className="modal-car"
            blockClass="w-[461px] h-[248px]"
            loading="lazy"
          />
        </div>
        <div className={modalCss.modalDescriptionWrap}>
          <div className={modalCss.block}>
            <h3 className={modalCss.title}>
              {make} <span className={modalCss.span}>{model}</span>, {year}
            </h3>
            <div className={modalCss.descriptListWrap}>
              <ul className={modalCss.descriptList}>
                {renderItems(locationData, <Separator />)}
              </ul>
              <ul className={modalCss.descriptList}>
                {renderItems(carData, <Separator />)}
              </ul>
            </div>
            <p className={modalCss.descript}>{description}</p>
          </div>
          <AccessoriesBlock
            title="Accessories and functionalities"
            accessories={accessories}
            functionalities={functionalities}
          />

          <RentalCondBlock
            title="Rental Conditions"
            rentConditions={rentConditions}
            mile={mile}
            price={price}
          />
        </div>
      </div>
      <a href="tel:+380730000000" className={modalCss.modalBtnLink}>
        Rental car
      </a>
    </div>
  );
};

ModalCardDetail.propTypes = {
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
    accessories: PropTypes.array.isRequired,
    rentalConditions: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModalCardDetail;
