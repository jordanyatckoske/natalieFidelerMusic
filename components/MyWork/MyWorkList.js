import MyWorkCard from "./MyWorkCard";

export default function MyWorkList({ positions }) {
  const pressList = positions.map((position, k) => {
    return <MyWorkCard position={position} key={k} />;
  });

  return <div>{pressList}</div>;
}
