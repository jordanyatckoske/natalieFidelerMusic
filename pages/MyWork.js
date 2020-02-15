import MainLayout from "../components/Layouts/MainLayout";
import {
  attributes,
  react as MyWorkContent,
} from "../content/work/job-title.md";
import MyWorkList from "../components/MyWork/MyWorkList";

export default function MyWork() {
  let { positions } = attributes;
  return (
    <MainLayout>
      <h2>My Work</h2>
      <p>Some content about some stuff doing the things</p>
      <MyWorkList positions={positions} />
    </MainLayout>
  );
}
