import { useEffect, useState } from "react";
import { getDataByCountry } from "../../../../services/apiService";
import { FaArrowTrendDown } from "react-icons/fa6";

const HomeApi = () => {
  const [randomData, setRandomData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let intervalId;

    const fetchData = async () => {
      try {
        const data = await getDataByCountry();
        updateRandomCountry(data);
        setLoading(false);

        intervalId = setInterval(() => {
          updateRandomCountry(data);
        }, 5000);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    const updateRandomCountry = (data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomCountry = data[randomIndex];
      setRandomData(randomCountry);
    };
    fetchData();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!randomData) {
    return <div>Error loading data</div>;
  }
  return (
    <div id="homeCard">
      <img
        src={randomData.countryInfo.flag}
        className="homeFlag"
        alt={`${randomData.country} flag`}
      />
      <div className="homeTotals">
        <p className="homeCases">{randomData.cases}</p>
        <div className="homeTotals2">
          {/* <span className="homeApiIcon">&#xe674;</span> */}
          <FaArrowTrendDown />
          <div className="homeTotalDeaths">
            <p>{randomData.deaths}</p>
          </div>
          <div className="homeTotalRecovery">
            <p>{randomData.recovered}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeApi;
