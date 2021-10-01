const CityCard = ({ text, weather }) => {
  return (
    <div className="weather-card">
      <div className="weather-icon sun"></div>
      <h1>{weather}</h1>
      <p>{text}</p>
    </div>
  );
};

export default CityCard;
