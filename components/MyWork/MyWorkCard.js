export default function MyWorkCard({ position }) {
  return (
    <div className="card">
      <header className="card-header">
        <h2 className="card-header-title">{position.position}</h2>
      </header>
      <div className="card-content">
        <div className="content">
          <h4>{position.employer}</h4>
          <span>{position.startDate}</span> -{" "}
          <span>{position.endDate ? position.endDate : "Current"}</span>
        </div>
      </div>
    </div>
  );
}
