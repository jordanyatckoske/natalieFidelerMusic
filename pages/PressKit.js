import MainLayout from "../components/Layouts/MainLayout";
import MainSection from "../components/Layouts/MainSection";
import TitleSection from "../components/Layouts/TitleSection";

export default function PressKit() {
  return (
    <MainLayout>
      <TitleSection>
        <h2 className="animated fadeInUp title is-1">Press Kit</h2>
        <p className="animated fadeInDown subtitle is-3">
          Some content about some stuff doing the things
        </p>
      </TitleSection>
      <MainSection></MainSection>
    </MainLayout>
  );
}
