import { useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import BandsInTown from "../API/BandsInTown";
import EventsList from "../components/Calendar/EventsList";

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
      <h2>Calendar</h2>
      <p>
        Keep up with my future shows and see where I have previously performed!
      </p>
      <EventsList events={events} />
    </MainLayout>
  );
}
