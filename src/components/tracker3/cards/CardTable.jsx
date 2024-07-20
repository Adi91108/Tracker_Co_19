import './cardTable.css'

export const CardTable = ({flag, country, updated}) => {
    return (
      <div className='cardContainer'>
        <div className="cardflag">
          <img src={flag} alt={`${country} flag`} className="flagDesign" />
          <div className="cardText">
            <h5 className="countryName">{country}</h5>
            <p className="cardData">{updated}</p>
          </div>
        </div>
      </div>
      );
    };