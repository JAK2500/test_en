import React from "react";
import "./CreateEvent.css";
import { Link } from "react-router-dom";

const CreateEvent = () => {
  return (
    <div>
      <div className="formContainer element-centre">
        <div className="element-centre inputContainer">
          <input
            className="inputText"
            type="text"
            id="eventName"
            name="eventName"
            placeholder="Event Name"
          />
          <input
            className="inputText"
            type="text"
            id="hostName"
            name="hostName"
            placeholder="Host name"
          />
          <label className="typo" for="starttime">
            Start (date and time):
          </label>
          <input
            className="inputText"
            type="datetime-local"
            id="starttime"
            name="starttime"
          ></input>

          <label className="typo" for="endtime">
            End (date and time):
          </label>
          <input
            className="inputText"
            type="datetime-local"
            id="endtime"
            name="endtime"
          ></input>

          <input
            className="inputText"
            type="text"
            id="location"
            name="location"
            placeholder="Location"
          />

          <label className="typo" for="file">
            Choose event photo to upload:
          </label>
          <input type="file" id="file" name="file" accept="image/*" />
        </div>

        <div className="nxtBtnContainer">
          <Link to="/event">
            <div className="nxtBtn element-centre">Next</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
