import React, {useEffect} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

const Modal = ({showModal, children,onCancel}) => {
  let modalRoot = document.getElementById('modal-root');
  useEffect(() => {
    if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.setAttribute('id', 'modal-root');
      document.body.appendChild(modalRoot);
    }
    return () => {
      // modalRoot.removeChild(el);
    };
  });
  return showModal ? ReactDom.createPortal(
    <div>simple div, nothing facny
    {children}
    </div>, modalRoot
  ): null;

};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
