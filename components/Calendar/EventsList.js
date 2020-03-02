import EventCard from "./EventCard";

export default function EventsList({ events }) {
  const eventsList = events.map(event => {
    return (
      <div className="column">
        <EventCard event={event} key={event.url} />
      </div>
    );
  });

  return <div className="columns">{eventsList}</div>;
}
