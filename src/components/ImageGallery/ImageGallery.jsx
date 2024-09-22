import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.list}>
      {images.map(img => {
        return (
          <li key={img.id} className={css.item}>
            <ImageCard
              src={img.urls.regular}
              alt={img.alt_description}
              openModal={openModal}
            />
          </li>
        );
      })}
    </ul>
  );
}