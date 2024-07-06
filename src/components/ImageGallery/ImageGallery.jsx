import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images }) {
  // Перевіряємо, чи є зображення
  if (images.length === 0) {
    return null;
  }

  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard imageItem={image} />
        </li>
      ))}
    </ul>
  );
}
