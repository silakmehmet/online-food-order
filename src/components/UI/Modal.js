import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classses from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classses.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classses.modal}>
      <div className={classses.content}> {props.children} </div>
    </div>
  );
};

const portal = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portal)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portal
      )}
    </Fragment>
  );
};

export default Modal;
