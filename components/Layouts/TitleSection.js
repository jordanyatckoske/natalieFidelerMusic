const TitleSection = props => (
  <div
    className="hero has-text-centered is-large hero-image-background is-link is-bold"
    style={{ backgroundImage: `url(${props.image})` }}
  >
    {/* <img className="hero-image-cover" src={props.image} /> */}
    <div className="hero-body">{props.children}</div>
  </div>
);

export default TitleSection;
