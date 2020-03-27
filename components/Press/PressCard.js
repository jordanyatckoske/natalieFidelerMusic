import ScrollAnimation from "react-animate-on-scroll";

export default function quoteCard({ quote }) {
  const date = new Date(quote.date);
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce="true">
      <blockquote className="section blockquote">
        <ScrollAnimation animateIn="fadeIn delay-1s" animateOnce="true">
          <h2 className="title is-1 has-text-primary">{quote.quote}</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn delay-2s" animateOnce="true">
          <footer className="has-text-right">
            <h4 className="title has-text-dark is-3">{quote.author}</h4>
            <h4 className="subtitle has-text-grey is-4">{`${date.toDateString()}`}</h4>
          </footer>
        </ScrollAnimation>
      </blockquote>
    </ScrollAnimation>
  );
}
