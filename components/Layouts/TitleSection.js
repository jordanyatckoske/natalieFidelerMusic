const TitleSection = props => (
  <div
    className="animated fadeIn hero has-text-centered is-large hero-image-background is-primary is-bold"
    style={{ backgroundImage: `url(${props.image})` }}
  >
    {/* <img className="hero-image-cover" src={props.image} /> */}
    <div className="hero-body">{props.children}</div>
  </div>
);

export default TitleSection;
