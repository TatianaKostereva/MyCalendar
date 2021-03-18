import React, { useContext } from "react";

import { DataBaseEventsContext } from "../data-base/DataBaseEvents";
import EventsListItem from "./EventsListItem";

const EventsList = () => {
  const eventsList = useContext(DataBaseEventsContext);
  return (
    <div className="event-list">
      {eventsList.map((calenderEvent) => (
        <EventsListItem key={calenderEvent.id} item={calenderEvent} />
      ))}
    </div>
  );
};

export default EventsList;
