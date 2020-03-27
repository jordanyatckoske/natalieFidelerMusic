import ScrollAnimation from "react-animate-on-scroll";

export default function PhotoCard({ photo }) {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <div className="tile is-child ">
        {/* <div className="tile box"> */}
        <img className="" src={photo.image} alt={photo.imageAlt} />
        {/* </div> */}
      </div>
    </ScrollAnimation>
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
