import React from "react";
import "./homeTop.css";
import Nav from "./nav/Nav";
import HomeApi from "./homeApi/HomeApi";

const HomeTop = () => {
  return (
    <div className="body">
      <Nav />
      <section>
        <div id="info">
          <h1 className="homeH1">
            Stay Home, And Prayer For Victim Of Corona virus.
          </h1>
          <p id="subtitle">
            Human coronaviruses are common and are typically associated with
            mild illnesses, similar to the common cold. The corona virus
            COVID-19 is affecting 210 countries & territories around the world
            and 2 international conveyances
          </p>
          <HomeApi />
        </div>
      </section>
    </div>
  );
};

export default HomeTop;
