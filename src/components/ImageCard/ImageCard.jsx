
import styles from './ImageCard.module.css';

const ImageCard = ({ image, onImageClick }) => {
  const handleClick = () => {
    onImageClick(image.urls.regular);
  };

  return (
    <li className={styles.ImageGalleryItem} onClick={handleClick}>
      <div className={styles.ImageCard}>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </li>
  );
};

export default ImageCard;
