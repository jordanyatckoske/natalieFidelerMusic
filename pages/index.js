import MainLayout from "../components/Layouts/MainLayout";
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

export default function Index() {
  let { pressQuotes } = quoteAttributes;
  let { artistName } = bioAttributes;

  let homeQuotes = pressQuotes.filter(quote => quote.featuredOnHome === true);
  return (
    <MainLayout>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <div className="hero">
        <div className="hero-body">
          <h1 className="title is-1">{artistName}</h1>
        </div>
      </div>
      <PressList pressQuotes={homeQuotes} />
    </MainLayout>
  );
}
