import React, { useState, useEffect } from "react";
import { getDataByCountry } from "../../services/apiService";  // Usa la función exportada en lugar de axios directamente
import "./topTen.css";
import CardTopten from "../CardTopTen/CardTopTen";

const TopTen = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getDataByCountry();
                setData(response);
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    if (loading) {
        return <>Loading</>;
    }

    if (!Array.isArray(data)) {
        return <>Error: Data is not an array</>;
    }

    const sortedData = data.sort((a, b) => b.cases - a.cases);
    const topTenCountries = sortedData.slice(0, 10);

    return (
        <>
            <div className="topTenTitle">
                <p className="top10Title">Top 10 Country</p>
            </div>
            <div>
                {topTenCountries.map((element) => (
                    <CardTopten
                        key={element.country}  // Usando `country` como clave
                        toptenFlagValue={element.countryInfo.flag}
                        toptenNameCountryValue={element.country}
                        toptenConfirmedCaseCountryValue={element.cases}
                    />
                ))}
            </div>
        </>
    );
};

export default TopTen;