import MainLayout from "../components/Layouts/MainLayout";
import {
  attributes,
  react as MyWorkContent,
} from "../content/work/my-work-page.md";
// import MyWorkList from "../components/MyWork/MyWorkList";
import MyWorkCard from "../components/MyWork/MyWorkCard";
import MainSection from "../components/Layouts/MainSection";
import TitleSection from "../components/Layouts/TitleSection";

export default function MyWork() {
  let { positions } = attributes;

  const myWorkList = positions.map((position, k) => {
    return <MyWorkCard position={position} key={k} />;
  });
  return (
    <MainLayout>
      <TitleSection image="images/uploads/Natalie25.jpg">
        <h2 className="animated fadeInUp title is-1">My Work</h2>
        <p className="animated fadeInDown subtitle is-3">
          My experiences in each of my careers
        </p>
      </TitleSection>
      <MainSection>
        <div className="columns is-multiline">{myWorkList}</div>
      </MainSection>
    </MainLayout>
  );
}
