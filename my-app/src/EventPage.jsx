import React from "react";
import "./EventPage.css";
import eventPic from "./images/BirthdayCake.png";
import { CalendarIcon } from "./icons/Calendar";
import { LocationIcon } from "./icons/Location";

const EventPage = () => {
  return (
    <div>
      <div className="eventImageContainer">
        <img src={eventPic} alt="event Image" />
      </div>
      <div className="eventName">Birthday Bash</div>
      <div className="eventHost">Hosted by Elysia</div>

      <div className="dateContainer">
        <div className="iconContainer">
          <CalendarIcon />
        </div>
        <div className="dateInfo">
          <div className="startDate">18 August 6:00PM</div>
          <div className="endDate">to 19 August 1:00PM UTC +10</div>
        </div>
      </div>

      <div className="addrContainer">
        <div className="iconContainer">
          <LocationIcon />
        </div>
        <div className="addrInfo">
          <div className="streetName">Street name</div>
          <div className="addDetails">Suburb, State, Postcode</div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
