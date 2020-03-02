import MainLayout from "../components/Layouts/MainLayout";
import {
  attributes,
  react as BioContent,
} from "../content/personalInfo/artist.md";
import ReactMarkdown from "react-markdown";

export default function Bio() {
  let { artistName, artistBio } = attributes;
  return (
    <MainLayout>
      <h2 className="title is-1">{artistName}</h2>
      <ReactMarkdown source={artistBio} />
    </MainLayout>
  );
}
