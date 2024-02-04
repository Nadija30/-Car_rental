import PropTypes from 'prop-types';
import modalCss from '../Modal/Modal.module.css';
const RentalCondItem = ({ conditionText, conditionValue }) => {
  return (
    <li className={modalCss.conditionsItem}>
      <p>{conditionText}</p>{' '}
      {conditionValue && (
        <span className={modalCss.span}>{conditionValue}</span>
      )}
    </li>
  );
};

RentalCondItem.propTypes = {
  conditionText: PropTypes.string.isRequired,
  conditionValue: PropTypes.string,
};

export default RentalCondItem;
