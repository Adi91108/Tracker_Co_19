import millify from "millify";
import "./countryInfo.css";
const CountryInfo = ({ data }) => {
  if (!data) return null;

  return (
    <div className="containerCardsTracker4">
      <div className="tCases">
        <span className="cardTitleT4">
          Total Cases:
          <div className="lineCards" />
        </span>
        <span className="NumberT4Navy">
          {millify(data.cases, {
            precision: 2,
            decimalSeparator: ".",
          })}
        </span>
      </div>
      <div className="tDeaths">
        <span className="cardTitleT4">
          Total Deaths:
          <div className="lineCards" />
        </span>
        <span className="NumberT4Red">
          {" "}
          {millify(data.deaths, {
            precision: 2,
            decimalSeparator: ".",
          })}
        </span>
      </div>
      <div className="tRecovered">
        <span className="cardTitleT4">
          Total Recovered:
          <div className="lineCards" />
        </span>
        <span className="NumberT4Green">
          {millify(data.recovered, {
            precision: 2,
            decimalSeparator: ".",
          })}
        </span>
      </div>
      <div className="tActive">
        <span className="cardTitleT4">
          Total Active:
          <div className="lineCards" />
        </span>
        <span className="NumberT4Blue">
          {millify(data.active, {
            precision: 2,
            decimalSeparator: ".",
          })}
        </span>
      </div>
      <div className="nCases">
        <span className="cardTitleT4">
          New Cases:
          <div className="lineCards" />
        </span>
        <span className="NumberT4Orange">{data.todayCases}</span>
      </div>
      <div className="nDeaths">
        <span className="cardTitleT4">
          New Deaths:
          <div className="lineCards" />
        </span>
        <span className="NumberT4Wine">{data.todayDeaths}</span>
      </div>
    </div>
  );
};

export default CountryInfo;

