import React from "react";

const EventListItem = ({ item }) => (
  <form className="events list">
    <fieldset>
      <div className="events item">
        <h3 className="events title"> {item.title} </h3>
        <p className="events text"> {item.text} </p>
        <div className="events date">
          <p>{item.date}</p>
        </div>
      </div>
    </fieldset>
  </form>
);

export default EventListItem;
