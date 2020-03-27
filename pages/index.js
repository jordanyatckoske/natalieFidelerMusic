import { useState, useEffect } from "react";
import Head from "next/head";
import MainLayout from "../components/Layouts/MainLayout";
import TitleSection from "../components/Layouts/TitleSection";
import MainSection from "../components/Layouts/MainSection";
import PressList from "../components/Press/PressList";
import EventCard from "../components/Calendar/EventCard";
import BandsInTown from "../API/BandsInTown";
import {
  attributes as quoteAttributes,
  react as QuoteContent,
} from "../content/quotes/press.md";
import {
  attributes as bioAttributes,
  react as BioContent,
} from "../content/personalInfo/artist.md";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";

export default function Index() {
  let { pressQuotes } = quoteAttributes;
  let { artistName } = bioAttributes;
  const [event, setEvent] = useState();

  let homeQuotes = pressQuotes.filter(quote => quote.featuredOnHome === true);

  useEffect(() => {
    BandsInTown.get(
      `/artists/nataliefideler/events?app_id=${process.env.REACT_APP_BANDSINTOWN_APPLICATION_ID}`,
    )
      .then(function(response) {
        setEvent(response.data[0]);
      })
      .catch(function(error) {});
  }, []);

  return (
    <MainLayout>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <TitleSection image="images/uploads/Action1.jpg">
        <img
          className="animated fadeInUp"
          src="images/uploads/NFIDELERBANNER.png"
        />
        <h3 className="animated fadeInDown subtitle is-4 is-italic">
          Artist and Composer
        </h3>
      </TitleSection>
      <MainSection>
        <div className="columns is-multiline">
          <div className="column is-full">
            <PressList pressQuotes={homeQuotes} />
          </div>
          <div className="column is-full">
            <ScrollAnimation animateIn="fadeIn" delay="1000" animateOnce="true">
              <h3 className="animated fadeInDown subtitle is-1 ">
                My Next Event
              </h3>
              <ScrollAnimation
                animateIn="fadeIn"
                delay="2000"
                animateOnce="true"
              >
                {event ? <EventCard event={event} /> : null}
                <div className="has-text-centered column is-full">
                  <div className="column is-inline">
                    <Link href="/Calendar">
                      <a className="button animated delay-1s pulse slower infinite is-info is-medium">
                        Calendar
                      </a>
                    </Link>
                  </div>
                  <div className="column is-inline has-text-centered">
                    <a
                      className="button is-primary has-text-white is-medium"
                      href="https://www.bandsintown.com/a/15465011-natalie-fideler/past-events?came_from=257&utm_medium=web&utm_source=artist_page"
                      target="_blank"
                    >
                      Past Events
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            </ScrollAnimation>
          </div>
        </div>
      </MainSection>
    </MainLayout>
  );
}
