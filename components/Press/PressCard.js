export default function quoteCard({ quote }) {
  return (
    <blockquote className="blockquote">
      <h2 className="title is-1">{quote.quote}</h2>
      <footer className="has-text-right">
        <h4 className="title has-text-gray-light is-3">{quote.author}</h4>
        <h4 className="subtitle has-text-gray-lighter is-4">{quote.date}</h4>
      </footer>
    </blockquote>
  );
}
