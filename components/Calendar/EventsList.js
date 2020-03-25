import EventCard from "./EventCard";

export default function EventsList({ events }) {
  const eventsList = events.map(event => {
    return (
      <div className="column is-full">
        <EventCard event={event} key={event.url} />
      </div>
    );
  });

  return <div className="columns is-multiline">{eventsList}</div>;
}
