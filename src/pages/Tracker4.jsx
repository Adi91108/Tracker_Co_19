import React, { useState, useEffect } from "react";
import TitleComp from "../components/TitlesTrakers/TitleComp";
import { getDataByCountry } from "../services/apiService";
import CountryInfo from "../components/tracker4/CountryInfo";
import CountryButton from "../components/tracker4/CountryButton";
import { Breadcrumbs, Link, Typography } from "@mui/material";

const Tracker4 = () => {
  const countries = [
    "USA",
    "Spain",
    "Italy",
    "India",
    "UK",
    "France",
    "Germany",
    "Russia",
    "Turkey",
  ];
  const [countryData, setCountryData] = useState({});
  const [selectedCountryData, setSelectedCountryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getDataByCountry();

        const data = results.reduce((acc, result) => {
          acc[result.country] = {
            country: result.country,
            cases: result.cases,
            deaths: result.deaths,
            recovered: result.recovered,
            active: result.active,
            todayCases: result.todayCases,
            todayDeaths: result.todayDeaths,
            flag: result.countryInfo.flag,
          };
          return acc;
        }, {});
        setCountryData(data);
      } catch (error) {
        console.error("Error fetching COVID data by country:", error);
      }
    };

    fetchData();
  }, []);
  const handleCountryClick = (country) => {
    setSelectedCountryData(countryData[country]);
  };

  return (
    <div>
     <div className="ml-1 mt-1">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/dashboard">
            Dashboard
          </Link>
          <Typography color="text.primary">Tracker4</Typography>
        </Breadcrumbs>
      </div>
      <TitleComp title="Covid-19 Country Wise - Tabs" />
      <div className="flagContainer">
        {countries.map((country) => (
          <CountryButton
            key={country}
            country={country}
            flag={countryData[country]?.flag}
            onClick={() => handleCountryClick(country)}
          />
        ))}
      </div>
      <CountryInfo data={selectedCountryData} />
    </div>
  );
};

export default Tracker4;
