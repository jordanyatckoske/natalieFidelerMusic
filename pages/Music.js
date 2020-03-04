import MainLayout from "../components/Layouts/MainLayout";
import MainSection from "../components/Layouts/MainSection";
import TitleSection from "../components/Layouts/TitleSection";

export default function Music() {
  return (
    <MainLayout>
      <TitleSection>
        <h2 className="title is-1">Music</h2>
        <p className="subtitle is-3">
          Catch up on my latest and most popular releases!
        </p>
      </TitleSection>
      <MainSection></MainSection>
    </MainLayout>
  );
}
