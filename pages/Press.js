import Head from "next/head";
import MainLayout from "../components/Layouts/MainLayout";
import PressList from "../components/Press/PressList";
// import { attributes, react as HomeContent } from "../content/quotes/quotes.md";

function Press() {
  // let { quotes } = attributes;
  return (
    <MainLayout>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <h2>Press</h2>
      {/* <PressList quotes={quotes} /> */}
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
