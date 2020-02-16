import MainLayout from "../components/Layouts/MainLayout";
import {
  attributes,
  react as BioContent,
} from "../content/personalInfo/natalie-fideler.md";

export default function Bio() {
  let { artistName, artistBio } = attributes;
  return (
    <MainLayout>
      <h2>{artistName}</h2>
      <p>{artistBio}</p>
    </MainLayout>
  );
}
