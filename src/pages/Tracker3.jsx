// import React from 'react'
import TitleComp from "../components/TitlesTrakers/TitleComp";
// import "../node_modules/leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import Map from "../components/tracker3/map/Map";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import CountriesTable from '../components/tracker3/countryTable/CountriesTable'

const Tracker3 = () => {
  return (
    <div>
      {/* <TitleComp title="State wise Covid-19 Upgrades - Graph & Table"></TitleComp> */}
      {/* <CountriesTable/> */}
      <Map />
    </div>
  );
};

export default Tracker3;
