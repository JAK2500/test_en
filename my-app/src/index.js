import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import CreateEvent from "./CreateEvent";
import EventPage from "./EventPage";
import reportWebVitals from "./reportWebVitals";

import eventImg from "./images/BirthdayCake.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/create" element={<CreateEvent />}></Route>
        <Route
          exact
          path="/event"
          element={
            <EventPage
              eventName={"Birthday Bash"}
              eventPic={eventImg}
              host={"Elysia"}
              startDate={"18 August 6:00PM"}
              endDate={"to 19 August 1:00PM UTC +10"}
              dateClickHandler={() => console.log("date clicked")}
              locationClickHandler={() => console.log("loc clicked")}
            />
          }
        ></Route>
      </Routes>
    </Router>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
