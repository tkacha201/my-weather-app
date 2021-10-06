import "font-awesome/css/font-awesome.min.css";

const CityCard = ({ text, temp, weather, wind, onDelete }) => {
  return (
    <div className="weather-card">
      <div className="weather-icon sun"></div>
      <h1>{temp} &#8451;</h1>
      <p>{text}</p>
      <button onClick={() => onDelete(text)} className="delIcon">
        <i className="fas fa-times"></i>
      </button>
      <ul>
        <li>{weather}</li>
        <li>
          {wind} <i className="fas fa-wind"> </i>
        </li>
      </ul>
    </div>
  );
};

export default CityCard;
