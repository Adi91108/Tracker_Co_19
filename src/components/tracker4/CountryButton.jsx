import './countryButton.css';

const CountryButton = ({ country, flag, onClick }) => {
    return (
        <button className="buttonFlag" onClick={() => onClick(country)}>
            <img src={flag} alt={`${country} flag`} style={{ width: '20px', height: '20px', marginRight: '10px' }} />
            {country}
        </button>
    );
};

export default CountryButton;