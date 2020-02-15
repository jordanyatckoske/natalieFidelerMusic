export default function MyWorkCard({ position }) {
  return (
    <div>
      <h2>{position.position}</h2>
      <h4>{position.employer}</h4>
      <span>{position.startDate}</span> -{" "}
      <span>{position.endDate ? position.endDate : "Current"}</span>
    </div>
  );
}
