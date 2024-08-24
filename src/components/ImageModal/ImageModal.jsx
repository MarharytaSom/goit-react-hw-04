
import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

const ImageModal = ({ image, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <ReactModal
      isOpen={!!image}
      onRequestClose={handleClose}
      contentLabel="Image Modal"
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <img src={image} alt="" className={styles.Image} />
    </ReactModal>
  );
};

export default ImageModal;
