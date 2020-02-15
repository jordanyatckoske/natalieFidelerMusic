import PressCard from "./PressCard";

export default function EventsList({ quotes }) {
  const pressList = quotes.map((press, k) => {
    return <PressCard press={press} key={k} />;
  });

  return <div>{pressList}</div>;
}
