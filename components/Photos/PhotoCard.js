export default function PhotoCard({ photo }) {
  return (
    <div>
      <img src={photo.image} alt={photo.imageAlt} />
    </div>
  );
}
