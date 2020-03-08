import ReactMarkdown from "react-markdown";

export default function MyWorkCard({ position }) {
  return (
    <div className=" column">
      <div className="card">
        <div className="card-content">
          <h2 className="title is-1 has-text-dark is-inline">
            {position.position}
          </h2>
          <div className="subtitle is-5 has-text-grey is-inline is-pulled-right">
            <span>{position.startDate}</span> -{" "}
            <span>{position.endDate ? position.endDate : "Current"}</span>
          </div>
          <h4 className="subtitle is-3 has-text-info ">{position.employer}</h4>

          <ReactMarkdown
            className="content has-text-grey"
            source={position.positionDescription}
          />
        </div>
      </div>
    </div>
  );
}
