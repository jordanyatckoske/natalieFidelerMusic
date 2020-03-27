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
      <TitleSection image="images/uploads/Natalie105.jpg">
        <h1 className="animated fadeInUp title is-1">Bio</h1>
      </TitleSection>
      <MainSection>
        <h2 className="animated fadeIn delay-1s title is-3 has-text-info">
          {artistName}
        </h2>
        <ReactMarkdown
          className="animated fadeIn delay-2s has-text-grey"
          source={artistBio}
        />
      </MainSection>
    </MainLayout>
  );
}
