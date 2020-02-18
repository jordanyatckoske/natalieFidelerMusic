import PhotoCard from "./PhotoCard";

export default function PhotosList({ photos }) {
  const photosList = photos.map((photo, k) => {
    return <PhotoCard photo={photo} key={k} />;
  });

  return <div>{photosList}</div>;
}
