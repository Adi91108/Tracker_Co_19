import React, { useEffect, useState } from "react";
import "./tracker0.css";
import TopTen from "../TopTen/TopTen";
import { getDataGlobal } from "../../services/apiService";
import CardCases from "../CardCases/CardCases";

const Tracker0 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDataGlobal();
        setData(result);
      } catch (error) {
        console.error("Error fetching global data: ", error);
      }
    };

    fetchData();
  }, []);

  if (data === null) {
    return <>Loading</>;
  }
  return (
    <>
      <div className="columTracker0">
        <div className="scrollContainer">
          <div className="scrollContent">
            <div>
              <h2 className="title0">COVID-19 Tracker</h2>
            </div>
            <CardCases
              key="total"
              cardsBgStyle="cardsBgStyleTotal"
              cardText="Total Case"
              smallTextValue={`+ ${data.todayCases}`}
              cardDataStyle="cardDataStyleTotal"
              globalTextDataValue={data.cases}
            />
            <CardCases
              key="active"
              cardsBgStyle="cardsBgStyleActive"
              cardText="Active Case"
              globalTextDataValue={data.active}
              cardDataStyle="cardDataStyleActive"
            />
            <CardCases
              key="recovered"
              cardsBgStyle="cardsBgStyleRecovered"
              cardText="Recovered Case"
              smallTextValue={`+ ${data.todayRecovered}`}
              globalTextDataValue={data.recovered}
              cardDataStyle="cardDataStyleRecovered"
            />
            <CardCases
              key="deaths"
              cardsBgStyle="cardsBgStyleDeaths"
              cardText="Deaths Case"
              smallTextValue={`+ ${data.todayDeaths}`}
              globalTextDataValue={data.deaths}
              cardDataStyle="cardDataStyleDeaths"
            />

            <div>
              <TopTen />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracker0;
