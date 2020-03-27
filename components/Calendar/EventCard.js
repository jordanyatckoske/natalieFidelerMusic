import LineupList from "./LineupList";
import ScrollAnimation from "react-animate-on-scroll";

export default function EventCard({ event }) {
  return (
    <ScrollAnimation animateIn="fadeIn" delay="500" animateOnce="true">
      <a href={event.url} target="_blank">
        <div className="card">
          <div className="card-image">
            <img src="/images/uploads/Action1.JPG" />
          </div>
          <div className="card-content">
            <div className="media">
              <h4 className="title is-4 has-text-dark">
                {event.venue.name.toUpperCase()}{" "}
              </h4>
              <p className="content subtitle is-6 has-text-grey">
                {event.venue.city}, {event.venue.region}
              </p>
            </div>
            <div className="content">
              <h6 className="title is-4 has-text-info">
                {new Date(event.datetime).toDateString().toUpperCase()}
              </h6>
              <p className="subtitle is-6 has-text-grey">
                {event.description ? event.description : " "}
              </p>
            </div>
            <h6 className="title is-6 is-marginless has-text-dark">LINEUP: </h6>
            <LineupList lineup={event.lineup} />
          </div>

          {/* event.datetime */}
          {/* event.venue.(latitude/longitude) */}
          {/* event.description */}

          {/* wrap whole card with url? event.url */}
        </div>
      </a>
    </ScrollAnimation>
  );
}
