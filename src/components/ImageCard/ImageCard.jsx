import css from './ImageCard.module.css';

export default function ImageCard({ src, alt, openModal }) {
  return (
    <div className={css.card}>
      <img src={src} alt={alt} onClick={() => openModal({ src, alt })} />
    </div>
  );
}