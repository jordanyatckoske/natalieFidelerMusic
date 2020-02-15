import LineupList from "./LineupList";

export default function EventCard({ event }) {
  return (
    <div>
      <h2>{event.venue.name}</h2>
      <h4>
        {event.venue.city}, {event.venue.region}
      </h4>
      <LineupList lineup={event.lineup} />
    </div>
  );
}
