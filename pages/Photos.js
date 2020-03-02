import MainLayout from "../components/Layouts/MainLayout";
import {
  attributes,
  react as PhotoContent,
} from "../content/photos/photo-page.md";
import PhotosList from "../components/Photos/PhotosList";

export default function Photos() {
  let { photos } = attributes;

  return (
    <MainLayout>
      <h2>Photos</h2>
      <p>Some content about some stuff doing the things</p>
      <PhotosList photos={photos} />
    </MainLayout>
  );
}
