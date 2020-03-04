import MainLayout from "../components/Layouts/MainLayout";
import {
  attributes,
  react as BioContent,
} from "../content/personalInfo/artist.md";
import ReactMarkdown from "react-markdown";
import MainSection from "../components/Layouts/MainSection";
import TitleSection from "../components/Layouts/TitleSection";

export default function Bio() {
  let { artistName, artistBio } = attributes;
  return (
    <MainLayout>
      <TitleSection>
        <h1 className="title is-1">Bio</h1>
      </TitleSection>
      <MainSection>
        <h2 className="title is-3">{artistName}</h2>
        <ReactMarkdown source={artistBio} />
      </MainSection>
    </MainLayout>
  );
}
