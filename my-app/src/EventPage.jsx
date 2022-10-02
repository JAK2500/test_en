import React from "react";
import "./EventPage.css";

import { CalendarIcon } from "./icons/Calendar";
import { LocationIcon } from "./icons/Location";
import { ArrowIcon } from "./icons/Arrow";

const EventPage = ({
  eventName,
  host,
  eventPic,
  startDate,
  endDate,
  dateClickHandler,
  locationClickHandler,
}) => {
  return (
    <div>
      <div className="eventImageContainer">
        <img src={eventPic} alt="event Image" />
      </div>

      <div className="eventName">{eventName}</div>
      <div className="eventHost">Hosted by {host}</div>

      <div className="infoBlock dateContainer">
        <div className="iconContainer">
          <CalendarIcon />
        </div>

        <div className="dateInfo">
          <div className="startDate">{startDate}</div>
          <div className="endDate">{endDate}</div>
        </div>

        <div className="arrow" onClick={() => dateClickHandler()}>
          <ArrowIcon />
        </div>
      </div>
      <div className="infoBlock addrContainer">
        <div className="iconContainer">
          <LocationIcon />
        </div>

        <div className="addrInfo">
          <div className="streetName">Street name</div>
          <div className="addDetails">Suburb, State, Postcode</div>
        </div>
        <div className="arrow" onClick={() => locationClickHandler()}>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
};

export default EventPage;
