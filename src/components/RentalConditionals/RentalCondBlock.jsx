import PropTypes from 'prop-types';

import RentalCondItem from './RentalCondItem';
import modalCss from '../Modal/Modal.module.css';
const RentalCondBlock = ({ rentConditions, mile, price, title }) => {
  return (
    <div className={modalCss.block}>
      <h4 className={modalCss.titleH4}>{title}:</h4>
      <div className={modalCss.descriptListWrap}>
        <ul className={modalCss.conditionsList}>
          <RentalCondItem
            conditionText={rentConditions[0]}
            conditionValue={rentConditions[1]}
          />
          <RentalCondItem conditionText={rentConditions[2]} />
        </ul>
        <ul className={modalCss.conditionsList}>
          <RentalCondItem conditionText={rentConditions[3]} />
          <RentalCondItem conditionText={'Mileage: '} conditionValue={mile} />
          <RentalCondItem
            conditionText={'Price: '}
            conditionValue={`${price}$`}
          />
        </ul>
      </div>
    </div>
  );
};

RentalCondBlock.propTypes = {
  rentConditions: PropTypes.array.isRequired,
  mile: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RentalCondBlock;
