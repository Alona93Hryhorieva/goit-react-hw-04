export default function ImageCard({
  imageItem: {
    urls: { small, regular },
    alt_description,
  },
  openModal,
}) {
  return (
    <div>
      <img
        src={small}
        alt={alt_description}
        onClick={() => openModal(regular)}
      />
    </div>
  );
}
