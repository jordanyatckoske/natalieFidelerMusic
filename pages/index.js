import MainLayout from "../components/Layouts/MainLayout";
import MainSection from "../components/Layouts/MainSection";
import PressList from "../components/Press/PressList";
import Head from "next/head";
import {
  attributes as quoteAttributes,
  react as QuoteContent,
} from "../content/quotes/press.md";
import {
  attributes as bioAttributes,
  react as BioContent,
} from "../content/personalInfo/artist.md";
import TitleSection from "../components/Layouts/TitleSection";

export default function Index() {
  let { pressQuotes } = quoteAttributes;
  let { artistName } = bioAttributes;

  let homeQuotes = pressQuotes.filter(quote => quote.featuredOnHome === true);
  return (
    <MainLayout>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      {/* <div className="hero has-text-centered is-primary is-bold is-large">
        <div className="hero-body"> */}
      {/* <h1 className="title is-1">{artistName}</h1> */}
      {/* <img className="hero-image-cover" src="images/uploads/Action1.jpg" /> */}

      <TitleSection image="images/uploads/Action1.jpg">
        <img src="images/uploads/NFIDELERBANNER.png" />
        <h3 className="subtitle is-4 is-italic">Artist and Composer</h3>
      </TitleSection>

      {/* </div>
      </div> */}
      <MainSection>
        <PressList pressQuotes={homeQuotes} />
      </MainSection>
    </MainLayout>
  );
}
