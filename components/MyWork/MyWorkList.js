import MyWorkCard from "./MyWorkCard";

export default function MyWorkList({ positions }) {
  const myWorkList = positions.map((position, k) => {
    return (
      <>
        <MyWorkCard position={position} key={k} />
      </>
    );
  });

  return <div>{myWorkList}</div>;
}
