export default function LineupList({ lineup }) {
  const list = lineup.map(artist => {
    return <li key={artist}>{artist}</li>;
  });

  return <ul className="content has-text-grey">{list}</ul>;
}
