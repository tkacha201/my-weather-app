import CityCard from "./CityCard";

const CityCardList = ({ cities, onDelete }) => {
  return (
    <div className="weather-wrapper">
      {cities.map((city) => (
        <CityCard
          text={city.name}
          key={city.id}
          temp={Math.round(city.temp)}
          weather={city.weather}
          wind={city.wind}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CityCardList;
