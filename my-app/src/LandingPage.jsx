import React from "react";
import "./LandingPage.css";
import landingImg from "./images/LandingPageImage.svg";

const LandingPage = () => {
  return (
    <div className="element-centre landingPageContainer">
      <div className="heading element-centre">
        <div> Imagine if </div>
        <div className="snapchat">Snapchat</div>
        <div> had events. </div>
      </div>
      <div className="tagline">
        Easily host and share events with your friends across any social media.
      </div>

      <div className="landingImg element-centre">
        <img src={landingImg} alt="Landing Image" />
      </div>

      <div className="eventBtn element-centre">🎉 Create my event</div>
    </div>
  );
};

export default LandingPage;
