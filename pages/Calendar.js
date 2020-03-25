import { useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import BandsInTown from "../API/BandsInTown";
import EventsList from "../components/Calendar/EventsList";
import MainSection from "../components/Layouts/MainSection";
import TitleSection from "../components/Layouts/TitleSection";

export default function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    BandsInTown.get(
      `/artists/nataliefideler/events?app_id=${process.env.REACT_APP_BANDSINTOWN_APPLICATION_ID}`,
    )
      .then(function(response) {
        setEvents(response.data);
        // data.venue.(name, latitude, longitude, region, city)
        // data.lineup
        // data.url
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  return (
    <MainLayout>
      <TitleSection image="images/uploads/Natalie_theEntry.jpg">
        <h2 className="title is-1">Calendar</h2>
        <p className="subtitle is-3">
          Keep up with my future shows and see where I have previously
          performed!
        </p>
      </TitleSection>
      <MainSection>
        <EventsList events={events} />
        <div className="columns is-multiline">
          <div className="column is-full has-text-centered">
            <a
              className="button is-link is-medium"
              href="https://www.bandsintown.com/a/15465011-natalie-fideler/past-events?came_from=257&utm_medium=web&utm_source=artist_page"
              target="_blank"
            >
              Past Events
            </a>
          </div>
        </div>
      </MainSection>
    </MainLayout>
  );
}
