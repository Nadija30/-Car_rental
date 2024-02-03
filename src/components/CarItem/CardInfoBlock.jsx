import PropTypes from 'prop-types';

import { formatedValue } from '../../shared/utils';
import Separator from '../Separator';
import { renderItems } from '../../shared/utils/utils';
import itemCss from './CarItem.module.css';
const CardInfoBlock = ({ locationData, carData }) => {
  return (
    <>
      <ul className={itemCss.descriptList}>
        {renderItems(locationData, <Separator />)}
      </ul>
      <ul className={itemCss.descriptList}>
        {Object.entries(carData).map(([key, value], idx, arr) => (
          <li key={idx} className={itemCss.descriptItem}>
            {formatedValue(key, value)}
            {idx < arr.length - 1 && <Separator />}
          </li>
        ))}
      </ul>
    </>
  );
};

CardInfoBlock.propTypes = {
  carData: PropTypes.object.isRequired,
  locationData: PropTypes.array.isRequired,
};

export default CardInfoBlock;
