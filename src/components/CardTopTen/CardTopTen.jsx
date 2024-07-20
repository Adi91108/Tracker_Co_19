import React from "react";
import "./cardTopTen.css";

const CardTopten = ({ toptenFlagValue, toptenNameCountryValue, toptenConfirmedCaseCountryValue }) => {
    return (
      <>
      <div className="countryContainer">
        <div className="topTenInfoData">
          <div className="toptenFlag">
            <img src={toptenFlagValue} alt={`${toptenNameCountryValue} flag`} />
          </div>
          <div className="toptenCountry">
            <p>{toptenNameCountryValue}</p>
          </div>
        </div>
        <div className="toptenConfirmedCase">
          <p>{toptenConfirmedCaseCountryValue}</p>
        </div>
      </div>
      </>
    );
  };
  
  export default CardTopten;
