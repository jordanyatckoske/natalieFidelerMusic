import ReactMarkdown from "react-markdown";

export default function MyWorkCard({ position }) {
  return (
    <div className="column is-full">
      <div className="card">
        <div className="card-content">
          <div className="has-text-centered-mobile">
            <h2 className="title is-1 has-text-dark is-inline-tablet">
              {position.position}
            </h2>
            <div className="subtitle is-5 has-text-grey is-inline-tablet has-text-right-tablet">
              <span>{new Date(position.startDate).toDateString()}</span> -{" "}
              <span>
                {position.endDate
                  ? new Date(position.endDate).toDateString()
                  : "Current"}
              </span>
            </div>
            <h4 className="subtitle is-3 has-text-info ">
              {position.employer}
            </h4>
          </div>
          <ReactMarkdown
            className="content has-text-grey"
            source={position.positionDescription}
          />
        </div>
      </div>
    </div>
  );
}
