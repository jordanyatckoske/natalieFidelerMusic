import MainLayout from "../components/Layouts/MainLayout";
import MainSection from "../components/Layouts/MainSection";
import TitleSection from "../components/Layouts/TitleSection";

export default function Videos() {
  return (
    <MainLayout>
      <TitleSection>
        <h2 className="title is-1">Videos</h2>
        <p className="subtitle is-3">
          Some content about some stuff doing the things
        </p>
      </TitleSection>
      <MainSection></MainSection>
    </MainLayout>
  );
}
