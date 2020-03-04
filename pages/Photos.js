import MainLayout from "../components/Layouts/MainLayout";
import {
  attributes,
  react as PhotoContent,
} from "../content/photos/photo-page.md";
import PhotosList from "../components/Photos/PhotosList";
import MainSection from "../components/Layouts/MainSection";
import TitleSection from "../components/Layouts/TitleSection";

export default function Photos() {
  let { photos } = attributes;

  return (
    <MainLayout>
      <TitleSection>
        <h2 className="title is-1">Photos</h2>
      </TitleSection>
      <MainSection>
        <PhotosList photos={photos} />
      </MainSection>
    </MainLayout>
  );
}
