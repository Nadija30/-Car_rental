import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import modalCss from './Modal.module.css';
import { handleClose } from '../../shared/utils';
// import Button from '../Button';
import { createPortal } from 'react-dom';
import sprite from '../../assets/sprite.svg';
const modalContainer = document.getElementById('modal');

const Modal = ({ onClose, children, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  const handleModalClose = useCallback(
    e => {
      document.body.style.overflow = 'visible';
      handleClose(e, onClose);
    },
    [onClose]
  );

  useEffect(() => {
    document.body.addEventListener('keydown', handleModalClose);

    return () => document.body.removeEventListener('keydown', handleModalClose);
  }, [handleModalClose]);

  return createPortal(
    <div className={modalCss.backdrop} onClick={handleModalClose}>
      <div className={modalCss.modal}>
        <svg
          className={modalCss.modalSvg}
          onClick={onClose}
          width="24"
          height="24"
        >
          <use href={`${sprite}#icon-x`} />
        </svg>
        {/* <Button
          onClick={onClose}
          className="close"
          type="button"
          iconURL="#icon-close"
          ariaLabel="close icon"
        /> */}
        {children}
      </div>
    </div>,
    modalContainer
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

export default Modal;
