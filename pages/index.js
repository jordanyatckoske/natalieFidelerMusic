import MainLayout from "../components/Layouts/MainLayout";
import PressList from "../components/Press/PressList";
import Head from "next/head";
import { attributes, react as QuoteContent } from "../content/quotes/quotes.md";

export default function Index() {
  let { pressQuotes } = attributes;

  let homeQuotes = pressQuotes.filter(quote => quote.featuredOnHome === true);
  return (
    <MainLayout>
      <p>Hello Next.js</p>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <PressList pressQuotes={homeQuotes} />
    </MainLayout>
  );
}
