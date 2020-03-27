import MainLayout from "../components/Layouts/MainLayout";
import MainSection from "../components/Layouts/MainSection";
import TitleSection from "../components/Layouts/TitleSection";

export default function Videos() {
  return (
    <MainLayout>
      <TitleSection>
        <h2 className="animated fadeInUp title is-1">Videos</h2>
      </TitleSection>
      <MainSection></MainSection>
    </MainLayout>
  );
}
