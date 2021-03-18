import React, { useEffect, useState } from "react";
import loadEvents from "../../services/loadEvents";

export const DataBaseEventsContext = React.createContext([]);

interface DataBaseEventsProps {
  children: any;
}

const DataBaseEvents: React.FC<DataBaseEventsProps> = ({ children }) => {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    loadEvents("./data/events.json").then((data) => {
      setEventsList(data);
    });
  }, []);

  return (
    <DataBaseEventsContext.Provider value={eventsList}>
      {children}
    </DataBaseEventsContext.Provider>
  );
};

export default DataBaseEvents;
