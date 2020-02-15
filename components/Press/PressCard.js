export default function quoteCard({ quote }) {
  return (
    <div>
      <h2>{quote.quote}</h2>
      <h4>{quote.author}</h4>
      <h4>{quote.date}</h4>
    </div>
  );
}
