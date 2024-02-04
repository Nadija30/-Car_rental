import PropTypes from 'prop-types';

import Separator from '../Separator';

import AccessoriesItem from './AccessoriesItem';
import modalCss from '../Modal/Modal.module.css';
const AccessoriesBlock = ({ accessories, functionalities, title }) => {
  return (
    <div className={modalCss.block}>
      <h4 className={modalCss.titleH4}>{title}:</h4>
      <div className={modalCss.descriptListWrap}>
        <AccessoriesItem items={accessories} separator={<Separator />} />
        <AccessoriesItem items={functionalities} separator={<Separator />} />
      </div>
    </div>
  );
};

AccessoriesBlock.propTypes = {
  accessories: PropTypes.array.isRequired,
  functionalities: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default AccessoriesBlock;
