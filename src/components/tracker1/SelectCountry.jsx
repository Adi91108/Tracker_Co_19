import  { useState, useEffect } from "react";
import './selectCountry.css'
import { getDataByCountry} from "../../services/apiService";
import 'bootstrap/dist/css/bootstrap.min.css'

const SelectCountry = ({ onSelectCountry }) => {
    const [allCountries, setAllCountries] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData=async()=>{
        try{
          const data= await getDataByCountry();
          setAllCountries(data);
        }catch(error){
          console.error('error global data',error);
        }finally{
          setLoading(false);
        }
      };
        fetchData(); 
    }    ,[]);
      
    const handleCountryChange = (selectedCountry) => {
      onSelectCountry(selectedCountry);
    };
    if (loading) {
      return <>Loading</>;
    }
  
    return (
      <div className="container my-3">
        <select className="form-select" name="countries" id="countries"
          onChange={(e) => handleCountryChange(e.target.value)} defaultValue={"India"}
        >
          <option value="">Select a Country</option>
          {allCountries.map((countryObject) => (
            <option 
            className="option" 
            key={countryObject.country} 
            value={countryObject.country}>{countryObject.country}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default SelectCountry;