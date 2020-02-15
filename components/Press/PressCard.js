export default function PressCard({ press }) {
  return (
    <div>
      <h2>{press.quote}</h2>
      <h4>{press.author}</h4>
      <h4>{press.date}</h4>
    </div>
  );
}
