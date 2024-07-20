import React, { useState } from "react";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { Box, Breadcrumbs, Card, CardContent, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
// import MapCard from "../components/MapCard";
// import MapTable from "../components/MapTable";
import useFetchData from "../../../customhooks/useFetchData";
import "./Map.css";
import MapCard from "../../MapCard";
import MapTable from "../../MapTable";
import { Chart, registerables } from "chart.js";
import { Link } from "react-router-dom";
import TitleComp from "../../TitlesTrakers/TitleComp";

Chart.register(...registerables);

const Map = () => {
  const [selcountries, setSelCountries] = useState("IND");
  const [date, setDate] = useState("2022-02-23");
  const { countries, province, selectprovince, totalResByCountry, location } =
    useFetchData(selcountries, date);

  const handleDateChange = (event) => setDate(event.target.value);
  const handleCountryChange = (event) => setSelCountries(event.target.value);

  const labels = [];
  const activeDataSet = [];
  const confirmedDataSet = [];

  selectprovince.forEach((label) => {
    labels.push(label.region?.province || "Unknown");
    activeDataSet.push(label.active || 0);
    confirmedDataSet.push(label.confirmed || 0);
  });

  const data = {
    labels,
    datasets: [
      {
        label: "State wise Active Cases",
        data: activeDataSet,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
      {
        label: "State wise Confirmed Cases",
        data: confirmedDataSet,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="ml-1 mt-1">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" className="bg-white text-midnight" href="/">
            Home
          </Link>
          <Link
            underline="hover"
            className="bg-white text-midnight"
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Typography>{selcountries}</Typography>
        </Breadcrumbs>
      </div>
      <TitleComp title="State wise Covid-19 Upgrades - Graph & Table"></TitleComp>
      <div className="flex w-3/5  justify-between">
        <div className="flex">
          <h3 className="ml-2 mt-4">Select date : </h3>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className="date-input"
          />
        </div>

        <div className="products flex">
          <h3 className="ml-2 mt-4">Select Country : </h3>
          <select
            value={selcountries}
            onChange={handleCountryChange}
            className="country-select"
            defaultValue={"India"}
          >
            {countries.map((country) => (
              <option key={country.name} value={country.iso}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex">
        <MapCard
          totalResByCountry={totalResByCountry}
          selcountries={selcountries}
        />

        <div className="map">
          <MapContainer center={location} zoom={3} scrollWheelZoom={true}>
            {selectprovince
              .filter(
                (pro) => pro.region.lat !== null && pro.region.long !== null
              )
              .map((pro) => (
                <CircleMarker
                  key={pro.region.lat}
                  center={[pro.region.lat, pro.region.long]}
                  pathOptions={{ color: "red" }}
                  radius={8}
                >
                  <Popup>
                    <Box sx={{ minWidth: 275 }}>
                      <Card variant="outlined">
                        <CardContent>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            Total Cases: {pro.confirmed}
                          </Typography>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            Active Cases: {pro.active}
                          </Typography>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            Patients Recovered: {pro.recovered}
                          </Typography>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            Fatality Rate: {pro.fatality_rate}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Popup>
                </CircleMarker>
              ))}
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>

      <div className="w-4/5 mt-8 mr-auto ml-auto">
        <Bar options={options} data={data} />
      </div>
      <div className="w-4/5 mt-8 mr-auto ml-auto">
        <MapTable selectprovince={selectprovince} />
      </div>
    </>
  );
};

export default Map;
