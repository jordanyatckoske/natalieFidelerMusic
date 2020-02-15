import EventCard from "./EventCard";

export default function EventsList({ events }) {
  const eventsList = events.map(event => {
    return <EventCard event={event} key={event.url} />;
  });

  return <div>{eventsList}</div>;
}
