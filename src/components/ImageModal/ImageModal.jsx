import Modal from 'react-modal';
import css from './ImageModal.module.css';

export default function ImageModal({ modalIsOpen, closeModal, src, alt }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <img src={src} alt={alt} className={css.img} />
    </Modal>
  );
}