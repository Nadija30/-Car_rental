import PropTypes from 'prop-types';
import modalCss from '../Modal/Modal.module.css';
const AccessoriesItem = ({ items, separator }) => {
  return (
    <ul className={modalCss.descriptList}>
      {items.map((item, idx) => (
        <li key={idx} className="text-description dark:text-white/50">
          {item}
          {idx < items.length - 1 && separator}
        </li>
      ))}
    </ul>
  );
};

AccessoriesItem.propTypes = {
  items: PropTypes.array.isRequired,
  separator: PropTypes.any,
};

export default AccessoriesItem;
