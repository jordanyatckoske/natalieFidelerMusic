import PhotoCard from "./PhotoCard";

export default function PhotosList({ photos }) {
  const photosList = photos.map((photo, k) => {
    return <PhotoCard photo={photo} key={k} offset={k} />;
  });

  return (
    <div className="tile is-ancestor">
      <div className="tile is-parent is-8 is-vertical">
        {/* <div className="tile">
          <div className="tile is-parent"> */}
        {photosList[0]}
        {photosList[1]}
        {/* </div>
        </div> */}
        {/* <div className="tile">
          <div className="tile is-parent"> */}
        {/* {photosList[0]}
        {photosList[1]} */}
        {/* </div>
        </div> */}
      </div>
      <div className="tile is-parent is-4 is-vertical">
        {photosList[2]}
        {photosList[3]}
        {photosList[2]}
        {photosList[3]}
        {photosList[0]}
      </div>
    </div>
  );
}
