export default function LineupList({ lineup }) {
  const list = lineup.map(artist => {
    return <li key={artist}>{artist}</li>;
  });

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
}
