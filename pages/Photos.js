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
      <div className="has-text-centered">
        <h2 className="title is-1">Photos</h2>
      </div>
      <PhotosList photos={photos} />
    </MainLayout>
  );
}
