import PressCard from "./PressCard";

export default function PressList({ pressQuotes }) {
  const pressList = pressQuotes.map(quote => {
    return <PressCard quote={quote} key={quote.date} />;
  });

  return <div className="section">{pressList}</div>;
}
