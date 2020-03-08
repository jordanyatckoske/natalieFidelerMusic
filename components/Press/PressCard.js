export default function quoteCard({ quote }) {
  return (
    <blockquote className="blockquote">
      <h2 className="title is-1 has-text-info">{quote.quote}</h2>
      <footer className="has-text-right">
        <h4 className="title has-text-dark is-3">{quote.author}</h4>
        <h4 className="subtitle has-text-grey is-4">{quote.date}</h4>
      </footer>
    </blockquote>
  );
}
