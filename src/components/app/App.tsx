import "./App.module.css";

import DataBaseEvents from "../data-base/DataBaseEvents";
import EventsList from "../events-catalog/EventsList";

const App: React.FC = () => {
  return (
    <DataBaseEvents>
      <EventsList />
    </DataBaseEvents>
  );
};

export default App;
