import Head from "next/head";
import MainLayout from "../components/Layouts/MainLayout";
import PressList from "../components/Press/PressList";
import { attributes, react as HomeContent } from "../content/quotes/press.md";
import MainSection from "../components/Layouts/MainSection";
import TitleSection from "../components/Layouts/TitleSection";

function Press() {
  let { pressQuotes } = attributes;
  return (
    <MainLayout>
      <TitleSection>
        <h2 className="title is-1">Press</h2>
      </TitleSection>
      <MainSection>
        <PressList pressQuotes={pressQuotes} />
      </MainSection>
    </MainLayout>
  );
}

// Press.getInitialProps = async () => {
//   const press = await importPress();
//   return { press };
// };

// const importPress = async () => {
//   const markdownFiles = require
//     .context("../content/quotes", false, /\.md$/)
//     .keys()
//     .map(relativePath => relativePath.substring(2));

//   return Promise.all(
//     markdownFiles.map(async path => {
//       const markdown = await import(`../content/quotes/${path}`);
//       return { ...markdown, slug: path.substring(0, path.length - 3) };
//     }),
// );
// };

export default Press;
