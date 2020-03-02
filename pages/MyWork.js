import MainLayout from "../components/Layouts/MainLayout";
import {
  attributes,
  react as MyWorkContent,
} from "../content/work/my-work-page.md";
// import MyWorkList from "../components/MyWork/MyWorkList";
import MyWorkCard from "../components/MyWork/MyWorkCard";

export default function MyWork() {
  let { positions } = attributes;

  const myWorkList = positions.map((position, k) => {
    return <MyWorkCard position={position} key={k} />;
  });
  return (
    <MainLayout>
      <div className="has-text-centered">
        <h2 className="title is-1">My Work</h2>
        <p className="subtitle is-3">
          Some content about some stuff doing the things
        </p>
      </div>
      <div className="columns">
        {/* <MyWorkList positions={positions} /> */}
        {myWorkList}
      </div>
    </MainLayout>
  );
}
