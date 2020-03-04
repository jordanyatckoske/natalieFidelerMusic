export default function PhotoCard({ photo }) {
  return (
    <div className="tile is-child ">
      {/* <div className="tile box"> */}
      <img className="" src={photo.image} alt={photo.imageAlt} />
      {/* </div> */}
    </div>
    // <div className="tile is-parent is-8">
    //   <div className="card">
    //     <div className="card-image">
    //       <figure className="image">

    //   </figure>
    //     </div>
    //   </div>
    // </div>
  );
}
