export default function ImageCard({
  imageItem: {
    urls: { small },
    alt_description,
  },
}) {
  return (
    <div>
      <img src={small} alt={alt_description} />
    </div>
  );
}
